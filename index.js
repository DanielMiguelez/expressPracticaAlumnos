import express from 'express';
import cors from 'cors';

import './database.js';
import apiRouter from './api/router.js';
import isLogged from './middlewares/isLogged.js';

const server = express();
const { PORT } = process.env;

server.use(express.json());
server.use(cors({ origin: true }));
server.use(isLogged);
server.use(apiRouter);

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
