import * as clientsRepository from './clients.repository.js';

async function getAll() {
  const clients = await clientsRepository.getAll();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientsRepository.getByDocumentNumber({
    documentNumber,
  });
  return client;
}

async function post({ newClient }) {
  const createdClient = await clientsRepository.post({ newClient });
  return createdClient;
}

async function getByFilter({ query }) {
  const filteredClients = await clientsRepository.getByFilter({ query });
  return filteredClients;
}

async function remove(id) {
  const deletedClient = await clientsRepository.remove(id);
  return deletedClient;
}

async function put({ _id, newClient }) {
  const updatedClient = await clientsRepository.put({ _id, newClient });
  return updatedClient;
}

async function edit(id, body) {
  const editedClient = await clientsRepository.edit(id, body);
  return editedClient;
}
export {
  getAll, getByDocumentNumber, post, getByFilter, remove, put, edit,
};
