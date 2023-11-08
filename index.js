import express from 'express';
import apiRouter from './api/router.js';

const server = express();
const port = 3000;

server.use(express.json());
server.use(apiRouter);


server.listen(port, ()=>{
    console.log(`server started on port ${port}`);
} );







/*import * as exportConst from './exportConst.js';
import elNombreQueQueramos from './exportDefault.js';

exportConst.hola();
exportConst.adios();
elNombreQueQueramos()*/
