import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { MONGO_URL, MONGO_DB_NAME } = process.env;

const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log('conexion satisfactoria');
} catch (e) {
  console.error('error!');
}
