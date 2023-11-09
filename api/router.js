import Router from 'express';
import questionsRouter from './questions/questions.router.js'

const router = Router();


router.use('/questions', questionsRouter);

export default router;
