import type { AuthenticatedWebSocket } from '@/lib/websocket';

import { FuturesStopOrders } from './stop';
import type {
  FuturesOrderSubscriptionParams,
  FuturesOrderUnsubscribeParams,
  FuturesOrderUpdate,
} from './types';

export class Orders {
  #ws: AuthenticatedWebSocket;
  public readonly stop: FuturesStopOrders;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
    this.stop = new FuturesStopOrders(ws);
  }

  /**
   * Subscribes to user order updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/order/ws/user-order
   */
  subscribe(
    params: FuturesOrderSubscriptionParams,
    onUpdate: (update: FuturesOrderUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'order.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesOrderUpdate }) => {
      if (message.method === 'order.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from user order updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/futures/order/ws/user-order
   */
  unsubscribe(params: FuturesOrderUnsubscribeParams): number {
    return this.#ws.send({ method: 'order.unsubscribe', params });
  }
}
