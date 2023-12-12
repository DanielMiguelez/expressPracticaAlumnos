import Router from 'express';

import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);
router.get('/pagination/:page/:itemsPerPage', animalsController.getPaginated);
router.get('/byFilter', animalsController.getByFilter);
router.get('/client/document/:number', animalsController.getByClientDocumentNumber); // Obtener animales por el doc number del dueño
router.patch('/client/document/:number', animalsController.updateByClientDocumentNumber); // cambiar el dueño de X animales

export default router;
