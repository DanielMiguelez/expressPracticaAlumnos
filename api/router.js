import Router from 'express';
import clientsRouter from './clients/clients.router.js';
import animalsRouter from './animals/animals.router.js';

const router = Router();

router.use('/clients', clientsRouter);
router.use('/animals', animalsRouter);

export default router;
