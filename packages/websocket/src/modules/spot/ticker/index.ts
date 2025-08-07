import type { AuthenticatedWebSocket } from '@/lib/websocket';

import { SpotBbo } from './bbo';
import { SpotDeals } from './deals';
import { SpotDepth } from './depth';
import { SpotIndex } from './index/module';
import { SpotState } from './state';

export class SpotTicker {
  public readonly state: SpotState;
  public readonly depth: SpotDepth;
  public readonly deals: SpotDeals;
  public readonly index: SpotIndex;
  public readonly bbo: SpotBbo;

  constructor(ws: AuthenticatedWebSocket) {
    this.state = new SpotState(ws);
    this.depth = new SpotDepth(ws);
    this.deals = new SpotDeals(ws);
    this.index = new SpotIndex(ws);
    this.bbo = new SpotBbo(ws);
  }
}
