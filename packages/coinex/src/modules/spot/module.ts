import { type CoinExClient } from '@/client';

import { Deal } from './deal';
import { Market } from './market';
import { SpotOrder } from './order';

export class Spot {
  public readonly market: Market;
  public readonly deal: Deal;
  public readonly order: SpotOrder;

  constructor(client: CoinExClient) {
    this.market = new Market(client);
    this.deal = new Deal(client);
    this.order = new SpotOrder(client);
  }
}
