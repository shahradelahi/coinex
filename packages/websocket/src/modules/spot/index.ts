import { AuthenticatedWebSocket } from '@/lib/websocket';
import type { CoinExWebSocketOptions } from '@/types';

import { SpotBalance } from './balance';
import { SpotExecutions } from './executions';
import { SpotOrders } from './orders';
import { SpotTicker } from './ticker';

export class Spot {
  public readonly ws: AuthenticatedWebSocket;

  public readonly balance: SpotBalance;
  public readonly executions: SpotExecutions;
  public readonly orders: SpotOrders;
  public readonly ticker: SpotTicker;

  constructor(options: CoinExWebSocketOptions) {
    this.ws = new AuthenticatedWebSocket({
      ...options,
      baseUrl: 'wss://socket.coinex.com/v2/spot',
    });

    this.balance = new SpotBalance(this.ws);
    this.ticker = new SpotTicker(this.ws);
    this.orders = new SpotOrders(this.ws);
    this.executions = new SpotExecutions(this.ws);
  }
}
