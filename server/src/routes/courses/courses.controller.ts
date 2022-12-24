import { Request, Response } from 'express';
import pool from '../../database';
import { Course, getCoursesFromDB, reformatCourse } from './courses.helper';


export const addCourse = async (req: Request, res: Response) => {
  try {
    const { course_code, course_name, hp, level, spring, fall, period1, period2, url } = req.body;
    const newCourse = await pool.query(
      'INSERT INTO courses(course_code, course_name, hp, level, spring, fall, period1, period2, url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        course_code,
        course_name,
        hp,
        level,
        spring,
        fall,
        period1,
        period2,
        url,
      ]
    );


    res.json(newCourse.rows[0]);
  } catch (error: unknown) {
    // we'll proceed, but let's report it
    console.log(error);
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const coursesFromDB = await pool.query('SELECT * FROM courses');
    const reformatedCourses = coursesFromDB.rows.map((course: Course) => {
      return reformatCourse(course);
    });
    res.status(200); // sends a status code
    res.send(JSON.stringify(reformatedCourses)); // sends results recieved from sql
  } catch (error: unknown) {
    // we'll proceed, but let's report it
    console.log(error);
  }
};

export const getCourses = async (req: Request, res: Response) => {
  try {
    const coursesFromDB = await getCoursesFromDB(req);
    const reformatedCourses = coursesFromDB.rows.map((course: Course) => {
      return reformatCourse(course);
    });
    res.status(200); // sends a status code
    res.send(JSON.stringify(reformatedCourses)); // sends results recieved from sql
  } catch (error: unknown) {
    // we'll proceed, but let's report it
    console.log(error);
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteCourse = await pool.query(
      'DELETE FROM courses WHERE course_id = $1',
      [id]
    );
    res.json('Course was deleted!');
  } catch (error: unknown) {
    // we'll proceed, but let's report it
    console.log(error);
  }
};


