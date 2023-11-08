import Router from 'express';
import helloRouter from './hello/hello.router.js';
import byeRouter from './bye/bye.router.js';

const router = Router();

router.use('/hello', helloRouter );
router.use('/bye', byeRouter );



export default router;