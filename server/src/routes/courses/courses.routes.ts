import { Router } from 'express';
import {
  addCourse,
  getCourses,
  deleteCourse,
  getAllCourses,
} from './courses.controller';

const router = Router();

//add
router.route('/add').post(addCourse);

//get all

router.route('/').get(getAllCourses);

//get queried courses
router.route('/').post(getCourses);

//delete a course

router.route('/:id').delete(deleteCourse);

export default router;
