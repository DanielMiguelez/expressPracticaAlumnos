import Router from 'express';

import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);
router.get('/byFilter', animalsController.getByFilter);
router.get('/client/document/:number', animalsController.getByClientDocumentNumber);

export default router;
