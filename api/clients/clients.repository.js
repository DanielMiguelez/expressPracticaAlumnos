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

async function remove(id) {
  const deletedClient = await clientModel.deleteOne({ _id: id });
  return deletedClient;
}

async function put({ _id, newClient }) {
  const updatedClient = await clientModel.findOneAndReplace({ _id }, newClient);
  return updatedClient;
}

async function edit({ _id, body }) {
  const editedClient = await clientModel.findOneAndReplace({ _id }, body, {
    new: true,
  });
  return editedClient;
}
export {
  getAll, getByDocumentNumber, post, getByFilter, remove, put, edit,
};
