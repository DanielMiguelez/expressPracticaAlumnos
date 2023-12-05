import Router from 'express';
import clientsRouter from './clients/clients.router.js';

const router = Router();

router.use('/clients', clientsRouter);

export default router;
