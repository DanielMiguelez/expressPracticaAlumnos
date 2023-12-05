import { Schema, model } from 'mongoose';

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  document: {
    type: {
      type: String,
      required: true,
      default: 'dni',
      enum: ['dni', 'nie', 'passport'],
    },
    number: {
      type: String,
      required: true,
    },
  },
  address: {
    type: {
      type: String,
      required: true,
      default: 'street',
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    level: {
      type: String,
    },
    door: {
      type: String,
    },
    cp: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
  },
  phone: {
    code: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },

});

const clientModel = model('Client', clientsSchema, 'clients');
export default clientModel;
