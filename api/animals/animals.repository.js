import animalModel from './animals.model.js';

async function getAll(query) {
  const animals = await animalModel
    .find(query)
    .populate({ path: 'clientId', select: 'name phone.number -_id' })
    .lean();
  return animals;
}

async function getPaginated({ skip, limit }) {
  const animals = await animalModel
    .find()
    .skip(skip)
    .limit(limit)
    .populate({ path: 'clientId', select: 'name phone.number -_id' })
    .lean();
  return animals;
}

async function getByFilter({ query }) {
  const filteredAnimals = await animalModel.find(query).lean();
  return filteredAnimals;
}

async function getByClientDocumentNumber({ clientId }) {
  const animals = await animalModel
    .find({ clientId })
    .populate({ path: 'clientId', select: 'name phone.number -_id' })
    .lean();
  return animals;
}

async function updateByClientId({ clientId, newProperties }) {
  const updatedInfo = await animalModel.updateMany({ clientId }, newProperties, { new: true });
  console.log(updatedInfo);

  const updatedAnimals = await animalModel.find({ clientId }).lean();
  return updatedAnimals;
}

export {
  getAll, getByFilter, getByClientDocumentNumber, updateByClientId, getPaginated,
};
