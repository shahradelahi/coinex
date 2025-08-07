import { CoinExWebSocket } from '../src';

import 'dotenv/config';

const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

if (!apiKey || !secretKey) {
  throw new Error('API_KEY and SECRET_KEY must be provided in .env file');
}

const client = new CoinExWebSocket({
  apiKey,
  secretKey,
  autoConnect: false,
});

client.on('error', (error, type) => {
  console.error(`Error on ${type} WebSocket:`, error);
});

async function run() {
  try {
    console.log('Connecting to CoinEx...');
    await client.connect();
    console.log('Connected!');
    console.log();

    const pingResponse = await client.ping();
    console.log('Ping:', pingResponse);

    const timeResponse = await client.getServerTime();
    console.log('Server Time:', timeResponse);

    console.log();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();
