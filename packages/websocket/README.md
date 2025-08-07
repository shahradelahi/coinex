# @coinex-org/websocket

A lightweight, type-safe TypeScript client for the official CoinEx WebSocket API v2.

## Features

- **Type-Safe:** Fully typed subscriptions and events for a better developer experience.
- **Dual Clients:** Separate, dedicated WebSocket clients for Spot and Futures markets.
- **Event-Driven:** Use `EventEmitter` to handle WebSocket events like `open`, `close`, and `error`.
- **Auto-Authentication:** Handles authentication automatically for private channels.
- **Auto-Reconnect:** Automatically reconnects if the connection is lost.

## Installation

```bash
npm install @coinex-org/websocket
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install @coinex-org/websocket
```

**yarn**

```bash
yarn add @coinex-org/websocket
```

</details>

## Usage

First, import and initialize the `CoinExWebSocket` client with your API Key and Secret Key.

```typescript
import { CoinExWebSocket } from '@coinex-org/websocket';

const client = new CoinExWebSocket({
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});

client.on('open', (type) => {
  console.log(`WebSocket connection opened for ${type}`);

  // Subscribe to public Spot market data
  if (type === 'spot') {
    console.log('Subscribing to BTCUSDT ticker...');
    client.spot.ticker.state.subscribe(
      { market_list: ['BTCUSDT'] },
      (update) => {
        console.log('Received spot ticker update:', update);
      }
    );
  }

  // Subscribe to private Futures data
  if (type === 'futures') {
    console.log('Subscribing to futures balance...');
    client.futures.balance.subscribe({ ccy_list: [] }, (update) => {
      console.log('Received futures balance update:', update);
    });
  }
});

client.on('error', (error, type) => {
  console.error(`Error on ${type} WebSocket:`, error);
});

client.on('close', (type) => {
  console.log(`WebSocket connection closed for ${type}`);
});
```

## Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@coinex-org/websocket).

## API Reference

### `CoinExWebSocket`

#### Events

- `on('open', (type: 'spot' | 'futures') => void)`: Emitted when a WebSocket connection is successfully opened and authenticated.
- `on('close', (type: 'spot' | 'futures') => void)`: Emitted when a WebSocket connection is closed.
- `on('error', (error: Error, type: 'spot' | 'futures') => void)`: Emitted when a WebSocket error occurs.
- `on('message', (message: any, type: 'spot' | 'futures') => void)`: Emitted when any message is received.

#### Methods

- `connect()`: Manually initiate the WebSocket connections.
- `close()`: Manually close the WebSocket connections.
- `ping()`: Ping the server to check connectivity.
- `getServerTime()`: Get the current server time.

### Spot Subscriptions (`client.spot`)

- **Balance**: `subscribe`, `unsubscribe`
- **Executions**: `subscribe`, `unsubscribe`
- **Orders**: `subscribe`, `unsubscribe`
  - **Stop Orders**: `stop.subscribe`, `stop.unsubscribe`
- **Ticker**:
  - **BBO**: `bbo.subscribe`, `bbo.unsubscribe`
  - **Deals**: `deals.subscribe`, `deals.unsubscribe`
  - **Depth**: `depth.subscribe`, `depth.unsubscribe`
  - **Index**: `index.subscribe`, `index.unsubscribe`
  - **State**: `state.subscribe`, `state.unsubscribe`

### Futures Subscriptions (`client.futures`)

- **Balance**: `subscribe`, `unsubscribe`
- **Executions**: `subscribe`, `unsubscribe`
- **Orders**: `subscribe`, `unsubscribe`
  - **Stop Orders**: `stop.subscribe`, `stop.unsubscribe`
- **Position**: `subscribe`, `unsubscribe`
- **Ticker**:
  - **BBO**: `bbo.subscribe`, `bbo.unsubscribe`
  - **Deals**: `deals.subscribe`, `deals.unsubscribe`
  - **Depth**: `depth.subscribe`, `depth.unsubscribe`
  - **Index**: `index.subscribe`, `index.unsubscribe`
  - **State**: `state.subscribe`, `state.unsubscribe`

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/coinex/graphs/contributors).
