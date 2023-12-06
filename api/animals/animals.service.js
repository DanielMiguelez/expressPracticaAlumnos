import * as animalsRepository from './animals.repository.js';

async function getAll() {
  const animals = await animalsRepository.getAll();
  return animals;
}

export {
  getAll,
};
