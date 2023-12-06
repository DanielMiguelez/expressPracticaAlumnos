import Router from 'express';

import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);

export default router;
