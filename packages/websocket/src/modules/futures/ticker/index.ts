import type { AuthenticatedWebSocket } from '@/lib/websocket';

import { FuturesBbo } from './bbo';
import { FuturesDeals } from './deals';
import { FuturesDepth } from './depth';
import { FuturesIndex } from './index/module';
import { FuturesState } from './state';

export class Ticker {
  public readonly bbo: FuturesBbo;
  public readonly deals: FuturesDeals;
  public readonly depth: FuturesDepth;
  public readonly state: FuturesState;
  public readonly index: FuturesIndex;

  constructor(ws: AuthenticatedWebSocket) {
    this.bbo = new FuturesBbo(ws);
    this.deals = new FuturesDeals(ws);
    this.depth = new FuturesDepth(ws);
    this.state = new FuturesState(ws);
    this.index = new FuturesIndex(ws);
  }
}
