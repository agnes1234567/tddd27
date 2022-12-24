import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import pool from './database';

export type Course = {
  course_code: string;
  course_name: string;
  hp: string;
  level: string;
  spring: string;
  fall: string;
  period1: string;
  period2: string;
  url: string;
};

export const populateDatabase = async () => {
  const csvFilePath = path.join(__dirname, '../../scrape/coursesdata0426.csv');

  const headers = [
    'course_code',
    'course_name',
    'hp',
    'level',
    'fall',
    'spring',
    'period1',
    'period2',
    'url',
  ];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  parse(
    fileContent,
    {
      delimiter: ';',
      columns: headers,
    },
    (error, result: Course[]) => {
      if (error) {
        console.error(error);
      }

      result.forEach(async (courseData) => {

        try {
          const { course_code, course_name, level, url } = courseData;
          const hp = parseInt(courseData.hp);
          const fall = Boolean(parseInt(courseData.fall));
          const spring = Boolean(parseInt(courseData.spring));
          const period1 = courseData.period1===""? null: parseInt(courseData.period1)
          const period2 = courseData.period2===""? null: parseInt(courseData.period2)
          const newCourse = await pool.query(
            'INSERT INTO courses(course_code, course_name, hp, level, fall, spring, period1, period2, url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [
              course_code,
              course_name,
              hp,
              level,
              fall,
              spring,
              period1,
              period2,
              url,
            ]
          );

          //console.log('Added', courseData.course_code);
        } catch (error: unknown) {
          // we'll proceed, but let's report it
          console.log(error);
        }
      });
    }
  );
};
