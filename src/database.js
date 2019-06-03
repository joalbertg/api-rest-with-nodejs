import MongoClient from 'mongodb';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';

const connect = async () => {
  try{
    const client = await MongoClient.connect(
      `mongodb://${DB_HOST}:${DB_PORT}`,
      { useNewUrlParser: true });
    const db = client.db('node-api-rest');
    console.info('DB is connected');

    return db;
  } catch(e) {
    return console.error(e);
  }
}

export default connect;
