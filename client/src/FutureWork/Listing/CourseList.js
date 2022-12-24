import React, {useState, useEffect} from 'react'
import CourseCard from './CourseCard'

          

function CourseList({search}) {
    //const [search, setSearch] = useState("");
    const [selected, setSelected] = useState({});
    const [filterlist, setFilterlist] = useState([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCourses = async () => {
        fetch(`/courses`).then(async (response) => {
            const res = await response.json();
            setData(res);
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setLoading(false);
        })
       }
    
    useEffect(() => {
        fetchCourses();
    }, []);

    

    //if(loading) return <h1>LOADING...</h1>

    //if(error) return console.error(error)

  
    return (
      <div>
        <ul className="list-group">
        <label>Lista</label>
          <div>{data && data.map(
        (element) => {
            return (
                    <CourseCard {...element}/>
                )
            }
    )}</div>
        </ul>
      </div>
    );
}

export default CourseList