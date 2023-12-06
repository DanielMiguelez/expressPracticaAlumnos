import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const animals = await animalsService.getAll();
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

export { getAll, getByFilter, getByClientDocumentNumber };
