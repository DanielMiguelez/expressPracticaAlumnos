import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const animals = await animalsService.getAll();
  res.json(animals);
}

async function getPaginated(req, res) {
  const { page, itemsPerPage } = req.params;
  const animals = await animalsService.getPaginated({ page, itemsPerPage });
  res.json(animals);
}

async function getByFilter(req, res) {
  const { query } = req;
  const animals = await animalsService.getByFilter({ query });
  res.json(animals);
}

async function getByClientDocumentNumber(req, res) {
  const clientDocumentNumber = req.params.number;
  const animals = await animalsService.getByClientDocumentNumber({
    clientDocumentNumber,
  });
  res.json(animals);
}

async function updateByClientDocumentNumber(req, res) {
  const clientDocumentNumber = req.params.number;
  const newProperties = req.body;
  const namedParams = { clientDocumentNumber, newProperties };
  const updatedAnimals = await animalsService.updateByClientDocumentNumber(namedParams);
  res.json(updatedAnimals);
}

export {
  getAll,
  getByFilter,
  getByClientDocumentNumber,
  updateByClientDocumentNumber,
  getPaginated,
};
