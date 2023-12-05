import * as clientsRepository from './clients.repository.js';

async function getAll() {
  const clients = await clientsRepository.getAll();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientsRepository.getByDocumentNumber({ documentNumber });
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

export {
  getAll, getByDocumentNumber, post, getByFilter,
};
