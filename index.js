import express from 'express';
import './database.js';
import apiRouter from './api/router.js';
import isLogged from './middlewares/isLogged.js';

const server = express();
const port = 3000;

server.use(express.json());
server.use(isLogged);
server.use(apiRouter);

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
