import { type OrderSide } from '@coinex-org/internal-shared';

import { type Pagination } from '@/modules';

/**
 * @interface SpotUserDeal
 * @description Represents a single user deal in the spot market.
 * @see https://docs.coinex.com/api/v2/spot/deal/http/list-user-deals
 */
export interface SpotUserDeal {
  /**
   * @property {number} deal_id - The ID of the deal.
   */
  deal_id: number;
  /**
   * @property {number} created_at - The time the deal was created.
   */
  created_at: number;
  /**
   * @property {string} market - The market in which the deal was executed.
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order associated with the deal.
   */
  order_id: number;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {'taker' | 'maker'} type - The type of the deal, "taker" or "maker".
   */
  type: 'taker' | 'maker';
  /**
   * @property {string} fee - The transaction fee.
   */
  fee: string;
  /**
   * @property {string} fee_ccy - The currency of the transaction fee.
   */
  fee_ccy: string;
  /**
   * @property {string} price - The price at which the deal was executed.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the deal.
   */
  amount: string;
  /**
   * @property {string} value - The total value of the deal.
   */
  value: string;
}

/**
 * @interface SpotListUserDealsParams
 * @description Parameters for listing user deals in the spot market.
 * @see https://docs.coinex.com/api/v2/spot/deal/http/list-user-deals
 */
export interface SpotListUserDealsParams {
  /**
   * @property {string} [market] - The market to query, e.g., "BTCUSDT".
   */
  market?: string;
  /**
   * @property {OrderSide} [side] - The side of the order, "buy" or "sell".
   */
  side?: OrderSide;
  /**
   * @property {number} [start_time] - The start time of the query range.
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range.
   */
  end_time?: number;
  /**
   * @property {number} [page] - The page number to retrieve.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of deals to retrieve per page.
   */
  limit?: number;
}

/**
 * @interface SpotListUserDealsResponse
 * @description The response for the listUserDeals method.
 */
export interface SpotListUserDealsResponse {
  data: SpotUserDeal[];
  pagination: Pagination;
}

/**
 * @interface SpotUserOrderDeal
 * @description Represents a single user order deal in the spot market.
 * @see https://docs.coinex.com/api/v2/spot/deal/http/list-user-order-deals
 */
export interface SpotUserOrderDeal {
  /**
   * @property {number} deal_id - The ID of the deal.
   */
  deal_id: number;
  /**
   * @property {number} created_at - The time the deal was created.
   */
  created_at: number;
  /**
   * @property {string} market - The market in which the deal was executed.
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order associated with the deal.
   */
  order_id: number;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {'taker' | 'maker'} type - The type of the deal, "taker" or "maker".
   */
  type: 'taker' | 'maker';
  /**
   * @property {string} fee - The transaction fee.
   */
  fee: string;
  /**
   * @property {string} fee_ccy - The currency of the transaction fee.
   */
  fee_ccy: string;
  /**
   * @property {string} price - The price at which the deal was executed.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the deal.
   */
  amount: string;
  /**
   * @property {string} value - The total value of the deal.
   */
  value: string;
}

/**
 * @interface SpotListUserOrderDealsParams
 * @description Parameters for listing user order deals in the spot market.
 * @see https://docs.coinex.com/api/v2/spot/deal/http/list-user-order-deals
 */
export interface SpotListUserOrderDealsParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order to retrieve deals for.
   */
  order_id: number;
  /**
   * @property {number} [page] - The page number to retrieve.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of deals to retrieve per page.
   */
  limit?: number;
}

/**
 * @interface SpotListUserOrderDealsResponse
 * @description The response for the listUserOrderDeals method.
 */
export interface SpotListUserOrderDealsResponse {
  data: SpotUserOrderDeal[];
  pagination: Pagination;
}
