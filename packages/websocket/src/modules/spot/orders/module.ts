import type { AuthenticatedWebSocket } from '@/lib/websocket';

import { SpotStopOrders } from './stop';
import type {
  SpotOrderSubscriptionParams,
  SpotOrderUnsubscribeParams,
  SpotOrderUpdate,
} from './types';

export class SpotOrders {
  #ws: AuthenticatedWebSocket;
  public readonly stop: SpotStopOrders;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
    this.stop = new SpotStopOrders(ws);
  }

  /**
   * Subscribes to user order updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/order/ws/user-order
   */
  subscribe(
    params: SpotOrderSubscriptionParams,
    onUpdate: (update: SpotOrderUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'order.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotOrderUpdate }) => {
      if (message.method === 'order.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from user order updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/order/ws/user-order
   */
  unsubscribe(params: SpotOrderUnsubscribeParams): number {
    return this.#ws.send({ method: 'order.unsubscribe', params });
  }
}
