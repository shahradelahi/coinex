import { type CoinExClient } from '@/client';

import { Deal } from './deal';
import { Market } from './market';
import { FuturesOrder } from './order/module';
import { Position } from './position';

export class Futures {
  public readonly market: Market;
  public readonly deal: Deal;
  public readonly order: FuturesOrder;
  public readonly position: Position;

  constructor(client: CoinExClient) {
    this.market = new Market(client);
    this.deal = new Deal(client);
    this.order = new FuturesOrder(client);
    this.position = new Position(client);
  }
}
