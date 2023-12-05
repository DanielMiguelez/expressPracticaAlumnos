import Router from 'express';
import * as clientsController from './clients.controller.js';

const router = Router();

router.get('/all', clientsController.getAll);
router.get('/byFilter', clientsController.getByFilter);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.post('/', clientsController.post);

export default router;
