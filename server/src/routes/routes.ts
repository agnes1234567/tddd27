import { Router } from 'express';
import CourseRoutes from './courses/courses.routes';

const router = Router();

router.use('/courses', CourseRoutes);

export default router;
