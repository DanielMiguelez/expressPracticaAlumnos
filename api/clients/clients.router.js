import Router from 'express';
import * as clientsController from './clients.controller.js';

const router = Router();

router.get('/all', clientsController.getAll);
router.get('/byFilter', clientsController.getByFilter);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.post('/', clientsController.post);
router.delete('/:id', clientsController.remove);
router.put('/:id', clientsController.put);
router.patch('/:id', clientsController.edit);

export default router;
