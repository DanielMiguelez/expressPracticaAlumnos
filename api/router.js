import Router from 'express';
import clientsRouter from './clients/clients.router.js';
import animalsRouter from './animals/animals.router.js';
import usersRouter from './users/users.router.js';
import authRouter from './auth/auth.router.js';

const router = Router();

router.use('/clients', clientsRouter);
router.use('/animals', animalsRouter);
router.use('/users', usersRouter);

router.use('/auth', authRouter);

export default router;
