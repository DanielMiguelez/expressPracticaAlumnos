import * as clientsService from './clients.service.js';

async function getAll(req, res) {
  const clients = await clientsService.getAll();
  res.json({ clients });
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

async function remove(req, res) {
  const { id } = req.params;
  const deletedClient = await clientsService.remove(id);
  res.json({ msg: 'client has been deleted', deletedClient });
}

async function put(req, res) {
  const { id } = req.params;
  const { body } = req;
  const updatedClient = await clientsService.put({ _id: id, newClient: body });
  res.json({ msg: 'updated client', updatedClient });
}

async function edit(req, res) {
  const { id } = req.params;
  const { body } = req;
  const editedClient = await clientsService.edit(id, body);
  res.json({ msg: 'new client', editedClient });
}

export {
  getAll, getByDocumentNumber, post, getByFilter, remove, put, edit,
};
