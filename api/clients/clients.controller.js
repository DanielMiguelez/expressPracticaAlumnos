import * as clientsService from './clients.service.js';

async function getAll(req, res) {
  const msg = await clientsService.getAll();
  res.json({ msg });
}

async function getByDocumentNumber(req, res) {
  const { number } = req.params;
  const reqDocNumLength = 6;
  if (number.length !== reqDocNumLength) {
    res.status(400);
    res.json({ msg: 'error, document number length is different as expected' });
    return;
  }
  const client = await clientsService.getByDocumentNumber({
    documentNumber: number,
  });

  res.json(client);
}

async function post(req, res) {
  const { body } = req;
  if (!Object.keys(body).length) {
    res.status(400);
    res.json({ msg: 'no puede ser vacio' });
    return;
  }
  const createdClient = await clientsService.post({ newClient: body });
  res.json(createdClient);
}

async function getByFilter(req, res) {
  const { query } = req;
  if (!Object.keys(query).length) {
    const msgError = 'Please specify a value in order to filter the database.';
    res.json({ msgError });
    return;
  }

  const filteredClients = await clientsService.getByFilter({ query });
  res.json(filteredClients);
}

export {
  getAll, getByDocumentNumber, post, getByFilter,
};
