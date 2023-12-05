import clientModel from './clients.model.js';

async function getAll() {
  const clients = await clientModel.find({}).lean();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientModel
    .findOne({ 'document.number': documentNumber })
    .lean();
  return client;
}

async function post({ newClient }) {
  const createdClient = await clientModel.create(newClient);
  return createdClient;
}

async function getByFilter({ query }) {
  const filteredClients = await clientModel.find(query).lean();
  return filteredClients;
}

export {
  getAll, getByDocumentNumber, post, getByFilter,
};
