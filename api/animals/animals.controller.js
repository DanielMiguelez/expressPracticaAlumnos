import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const animals = await animalsService.getAll();
  res.json(animals);
}
export {
  getAll,
};
