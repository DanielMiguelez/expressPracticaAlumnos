import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const animalsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'hamster', 'racoon', 'rabbit', 'lizard', 'parrot'],
  },
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ['male', 'female', 'unknown'],
  },
  birth: {
    type: String,
    required: true,
  },
  chipNumber: {
    type: String,
    unique: true,
  },
  clientId: {
    type: ObjectId,
    ref: 'Client',
  },
});

const animalModel = model('Animal', animalsSchema, 'animals');
export default animalModel;
