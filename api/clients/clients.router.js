import Router from 'express';
import * as clientsController from './clients.controller.js';
import isAdmin from '../../middlewares/isAdmin.js';

const router = Router();

router.get('/all', isAdmin, clientsController.getAll);
router.get('/byFilter', clientsController.getByFilter);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.post('/', clientsController.post);
router.delete('/:id', clientsController.remove);
router.put('/:id', clientsController.put);
router.patch('/:id', clientsController.edit);

export default router;
