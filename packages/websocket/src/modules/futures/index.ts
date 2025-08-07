import { AuthenticatedWebSocket } from '@/lib/websocket';
import type { CoinExWebSocketOptions } from '@/types';

import { Executions } from './executions';
import { Orders } from './orders';
import { Position } from './position';
import { Ticker } from './ticker';

export class Futures {
  public readonly ws: AuthenticatedWebSocket;
  public readonly ticker: Ticker;
  public readonly orders: Orders;
  public readonly executions: Executions;
  public readonly position: Position;

  constructor(options: CoinExWebSocketOptions) {
    this.ws = new AuthenticatedWebSocket({
      ...options,
      baseUrl: 'wss://socket.coinex.com/v2/futures',
    });
    this.ticker = new Ticker(this.ws);
    this.orders = new Orders(this.ws);
    this.executions = new Executions(this.ws);
    this.position = new Position(this.ws);
  }
}
