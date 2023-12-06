import animalModel from './animals.model.js';

async function getAll() {
  const animals = await animalModel
    .find({})
    .populate({ path: 'clientId' })
    .lean();
  return animals;
}
export {
  getAll,
};
