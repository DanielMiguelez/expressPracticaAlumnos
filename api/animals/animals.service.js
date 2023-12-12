import * as animalsRepository from './animals.repository.js';
import * as clientsService from '../clients/clients.service.js';

async function getAll() {
  const animals = await animalsRepository.getAll();
  return animals;
}

async function getPaginated({ page, itemsPerPage }) {
  const skip = page * itemsPerPage;
  const limit = itemsPerPage;

  const animals = await animalsRepository.getPaginated({ skip, limit });
  return animals;
}

async function getByFilter({ query }) {
  const animals = await animalsRepository.getByFilter({ query });
  return animals;
}

async function getByClientDocumentNumber({ clientDocumentNumber }) {
  const client = await clientsService.getByDocumentNumber({
    documentNumber: clientDocumentNumber,
  });
  const animals = await animalsRepository.getByClientDocumentNumber({
    clientId: client._id,
  });
  return animals;
}

async function updateByClientDocumentNumber({ clientDocumentNumber, newProperties }) {
  const client = await clientsService.getByDocumentNumber({ documentNumber: clientDocumentNumber });
  const namedParams = { clientId: client._id, newProperties };
  const updatedProperties = await animalsRepository.updateByClientId(namedParams);
  return updatedProperties;
}

export {
  getAll, getByFilter, getByClientDocumentNumber, updateByClientDocumentNumber, getPaginated,
};
