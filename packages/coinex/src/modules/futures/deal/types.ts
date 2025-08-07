import { type OrderSide } from '@coinex-org/internal-shared';

import { type Pagination } from '@/modules';

/**
 * @interface UserDeal
 * @see https://docs.coinex.com/api/v2/futures/deal/http/list-user-deals
 */
export interface UserDeal {
  deal_id: number;
  created_at: number;
  market: string;
  order_id: number;
  side: OrderSide;
  type: 'taker' | 'maker';
  fee: string;
  fee_ccy: string;
  price: string;
  amount: string;
  value: string;
  pnl: string;
}

/**
 * @interface ListUserDealsParams
 * @see https://docs.coinex.com/api/v2/futures/deal/http/list-user-deals
 */
export interface ListUserDealsParams {
  market?: string;
  side?: OrderSide;
  start_time?: number;
  end_time?: number;
  page?: number;
  limit?: number;
}

/**
 * @interface ListUserDealsResponse
 */
export interface ListUserDealsResponse {
  data: UserDeal[];
  pagination: Pagination;
}

/**
 * @interface UserOrderDeal
 * @see https://docs.coinex.com/api/v2/futures/deal/http/list-user-order-deals
 */
export interface UserOrderDeal {
  deal_id: number;
  created_at: number;
  market: string;
  order_id: number;
  side: OrderSide;
  type: 'taker' | 'maker';
  fee: string;
  fee_ccy: string;
  price: string;
  amount: string;
  value: string;
  pnl: string;
}

/**
 * @interface ListUserOrderDealsParams
 * @see https://docs.coinex.com/api/v2/futures/deal/http/list-user-order-deals
 */
export interface ListUserOrderDealsParams {
  market: string;
  order_id: number;
  page?: number;
  limit?: number;
}

/**
 * @interface ListUserOrderDealsResponse
 */
export interface ListUserOrderDealsResponse {
  data: UserOrderDeal[];
  pagination: Pagination;
}
