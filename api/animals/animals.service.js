import * as animalsRepository from './animals.repository.js';
import * as clientsService from '../clients/clients.service.js';

async function getAll() {
  const animals = await animalsRepository.getAll();
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

export { getAll, getByFilter, getByClientDocumentNumber };
