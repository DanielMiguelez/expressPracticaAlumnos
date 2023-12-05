import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://DanielTheBridge:admin@danielthebridge.mi7avd2.mongodb.net/';
const MONGO_DB_NAME = 'Veterinary_DB';
const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log('conexion satisfactoria');
} catch (e) {
  console.error('error!');
}
