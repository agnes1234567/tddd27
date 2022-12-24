const request = require('request-promise');
const cheerio = require('cheerio');
const pretty = require("pretty");
var fs = require("fs");
const { PassThrough } = require('stream');
const ObjectsToCsv = require('objects-to-csv')

const url = 'https://liu.se/studieinfo/kurs/';

class DataError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "Unknown data"; // (2)
    }
}


async function getData() {
    const text = await fs.readFileSync("courses.txt", "utf-8");
    var textByLine = text.split("\n");
    for(var i = 0; i < textByLine.length; i++)
    {
        textByLine[i] = textByLine[i].trim();
    }
    var courses = [];
    for (let course of textByLine) {
        result = await scrape(course, courses, 'fall');
        if (result && Object.keys(result).length > 0) {
            courses.push(result);
        }

        result = await scrape(course, courses, 'spring');
        if (result && Object.keys(result).length > 0) {
            courses.push(result);
        }
    };
    return courses;
}

async function scrape(course, courses, semester) {
    var obj = {};
    urlExt = semester == 'fall' ? '/ht-2022' : '/vt-2022'
    notSemester = semester == 'fall' ? 'spring' : 'fall'
    try {
        const htmlResult = await request.get(url + course + urlExt);
        const $ = await cheerio.load(htmlResult);
        obj['courseCode'] = course.trim();
        obj['courseName'] = $($(".main-container").first().children()[0], "header").text().split('\n')[1].split(',')[0].trim();
        rows = $("#examination").children().first().children().first().children().first().children().toArray();

        var examCodes = []
        var examDesc = []
        var hp = 0
        var columns
        for (var i = 1; i < rows.length; i++) {
            columns = $(rows[i].children, 'td').toArray().filter(element => element.type == 'tag');

            examCodes.push(columns[0].children[0].data.trim())
            examDesc.push(columns[1].children[0].data.trim())
            hp += parseFloat(columns[2].children[1].children[0].data)

        }
        obj['hp'] = hp;
        obj['level'] = $(".syllabus.f-2col").children()[2].next.data.trim()
        obj['field'] = $(".overview-content.f-col").children()[0].next.data.trim().split(/(?=[A-Z])/).map(element => {
            return element.trim();
        });
        obj['examiner'] = $(".overview-content.f-col").children()[3].next.data.trim();
        obj[semester] = 1;
        obj[notSemester] = 0;
        periodData = ($(".study-guide-table > tbody > tr:nth-child(2) > td:nth-child(4)")[0].children[0]).data.trim().split(',').map(element => {
            return parseInt(element.trim());
        });
        moduleData = ($(".study-guide-table > tbody > tr:nth-child(2) > td:nth-child(5)")[0].children[0]).data.trim().split(',').map(element => {
            return parseInt(element.trim());
        });

        try {
            if (periodData.length == 2 && periodData[0] == 1 && periodData[1] == 2) {
                try {
                    obj['period1'] = (isNaN(moduleData[0])) ? "-" : moduleData[0]
                    obj['period2'] = (isNaN(moduleData[1])) ? "-" : moduleData[1]
                }
                catch (err) {
                    console.log(err)
                }
            }
            else if (periodData[0] == 1) {
                try {
                    obj['period1'] = (isNaN(moduleData[0])) ? "-" : moduleData[0]
                }
                catch (err) {
                    console.log(err)
                }
            }
            else if (periodData[0] == 2) {
                try {
                    obj['period2'] = (isNaN(moduleData[1])) ? "-" : moduleData[1]
                }
                catch (err) {
                    console.log(err)
                }
            }
            else {
                throw new DataError(periodData);
            }

        }
        catch (err) {
            if (err instanceof DataError) {
                console.log(err)
            }
        }
        obj['url'] = (url + course).trim();
       
    } catch(err) {
        //console.error(err);
    }
    /*
     * try {
        const htmlResult = await request.get(url + course + '/ht-2022');
        const $ = await cheerio.load(htmlResult);

        obj['courseCode'] = course.trim();
        obj['courseName'] = $($(".main-container").first().children()[0], "header").text().split('\n')[1].split(',')[0].trim();

        rows = $("#examination").children().first().children().first().children().first().children().toArray();

        var examCodes = []
        var examDesc = []
        var hp = 0
        var columns

        for (var i = 1; i < rows.length; i++) {
            columns = $(rows[i].children, 'td').toArray().filter(element => element.type == 'tag');

            examCodes.push(columns[0].children[0].data.trim())
            examDesc.push(columns[1].children[0].data.trim())
            hp += parseFloat(columns[2].children[1].children[0].data)

        }
        obj['hp'] = hp;

        obj['level'] = $(".syllabus.f-2col").children()[2].next.data.trim()
        obj['field'] = $(".overview-content.f-col").children()[0].next.data.trim().split(/(?=[A-Z])/).map(element => {
            return element.trim();
        });

        obj['examiner'] = $(".overview-content.f-col").children()[3].next.data.trim();
        obj['autumn'] = 1;
        obj['spring'] = 0;
        periodData = ($(".study-guide-table > tbody > tr:nth-child(2) > td:nth-child(4)")[0].children[0]).data.trim().split(',').map(element => {
            return parseInt(element.trim());
        });

        moduleData = ($(".study-guide-table > tbody > tr:nth-child(2) > td:nth-child(5)")[0].children[0]).data.trim().split(',').map(element => {
            return parseInt(element.trim());
        });

        try {
            if (periodData.length == 2 && periodData[0] == 1 && periodData[1] == 2) {
                try {
                    obj['period1'] = (isNaN(moduleData[0])) ? "-" : moduleData[0]
                    obj['period2'] = (isNaN(moduleData[1])) ? "-" : moduleData[1]
                }
                catch (err) {
                    console.log(err)
                }
            }
            else if (periodData[0] == 1) {
                try {
                    obj['period1'] = (isNaN(moduleData[0])) ? "-" : moduleData[0]
                }
                catch (err) {
                    console.log(err)
                }
            }
            else if (periodData[0] == 2) {
                try {
                    obj['period2'] = (isNaN(moduleData[1])) ? "-" : moduleData[1]
                }
                catch (err) {
                    console.log(err)
                }
            }
            else {
                throw new DataError(periodData);
            }

        }
        catch (err) {
            if (err instanceof DataError) {
                console.log(err)
            }
        }
        obj['url'] = (url + course).trim();
    
        
    } catch (err) {
        console.log(err)
    }*/
    return obj;
}


async function getCourses() {
    var courses = await getData();

    console.log(Object.values(courses))
    var csv = new ObjectsToCsv(Object.values(courses));
    await csv.toDisk('courses' + '.csv')

}
getCourses();

