import { connect, connections, disconnect, set } from 'mongoose';

const mongooseConection = {
  isConnected: 0,
}

export const connectDB = async () => {
  set('strictQuery', false);

  if (mongooseConection.isConnected) {
    console.log('ya estaba conectado a mongo DB');
    return;
  }

  if (mongooseConection.isConnected > 0) {
    mongooseConection.isConnected = connections[0].readyState;

    await disconnect();
  }

  const mongo_URL: string = process.env.MONGO_URI || '';

  await connect(mongo_URL);
  mongooseConection.isConnected = 1;
  console.log('conectado a mongo DB');
}

export const disconnectDB = async () => {
  if (mongooseConection.isConnected === 0) return 

  await disconnect();
  console.log('desconectado de mongo DB');
}