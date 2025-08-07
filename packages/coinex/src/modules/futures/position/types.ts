import { type PositionSide, type TriggerPriceType } from '@coinex-org/internal-shared';

import { type Pagination } from '../../account/subaccount/types';

/**
 * @interface AdjustPositionLeverageParams
 * @description Parameters for adjusting the leverage of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/adjust-position-leverage
 */
export interface AdjustPositionLeverageParams {
  /**
   * @property {string} market - The market to adjust leverage for.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} leverage - The new leverage value.
   * @example 10
   */
  leverage: number;
  /**
   * @property {PositionSide} position_side - The side of the position.
   * @example "long"
   */
  position_side: PositionSide;
}

/**
 * @interface AdjustPositionMarginParams
 * @description Parameters for adjusting the margin of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/adjust-position-margin
 */
export interface AdjustPositionMarginParams {
  /**
   * @property {string} market - The market to adjust margin for.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} amount - The amount of margin to add or remove.
   * @example "100.00"
   */
  amount: string;
  /**
   * @property {1 | 2} type - The type of adjustment (1 for add, 2 for remove).
   * @example 1
   */
  type: 1 | 2;
}

/**
 * @interface ClosePositionParams
 * @description Parameters for closing a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/close-position
 */
export interface ClosePositionParams {
  /**
   * @property {string} market - The market to close the position in.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} price - The price at which to close the position.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount to close.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {PositionSide} side - The side of the position to close.
   * @example "long"
   */
  side: PositionSide;
}

/**
 * @interface Position
 * @description Represents a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-finished-position
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-pending-position
 */
export interface Position {
  /**
   * @property {number} position_id - The ID of the position.
   * @example 12345
   */
  position_id: number;
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {PositionSide} side - The side of the position.
   * @example "long"
   */
  side: PositionSide;
  /**
   * @property {number} leverage - The leverage of the position.
   * @example 10
   */
  leverage: number;
  /**
   * @property {string} open_price - The opening price of the position.
   * @example "40000.00"
   */
  open_price: string;
  /**
   * @property {string} open_value - The opening value of the position.
   * @example "20000.00"
   */
  open_value: string;
  /**
   * @property {string} open_amount - The opening amount of the position.
   * @example "0.5"
   */
  open_amount: string;
  /**
   * @property {string} close_price - The closing price of the position.
   * @example "45000.00"
   */
  close_price: string;
  /**
   * @property {string} close_value - The closing value of the position.
   * @example "22500.00"
   */
  close_value: string;
  /**
   * @property {string} close_amount - The closing amount of the position.
   * @example "0.5"
   */
  close_amount: string;
  /**
   * @property {string} unrealized_pnl - The unrealized profit and loss.
   * @example "2500.00"
   */
  unrealized_pnl: string;
  /**
   * @property {string} realized_pnl - The realized profit and loss.
   * @example "2000.00"
   */
  realized_pnl: string;
  /**
   * @property {string} avg_price - The average price of the position.
   * @example "42500.00"
   */
  avg_price: string;
  /**
   * @property {string} margin - The margin of the position.
   * @example "2000.00"
   */
  margin: string;
  /**
   * @property {string} maintenance_margin - The maintenance margin of the position.
   * @example "100.00"
   */
  maintenance_margin: string;
  /**
   * @property {string} liquidation_price - The liquidation price of the position.
   * @example "38000.00"
   */
  liquidation_price: string;
  /**
   * @property {string} take_profit_price - The take profit price for the position.
   * @example "50000.00"
   */
  take_profit_price: string;
  /**
   * @property {string} stop_loss_price - The stop loss price for the position.
   * @example "39000.00"
   */
  stop_loss_price: string;
  /**
   * @property {number} created_at - The time the position was created in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
  /**
   * @property {number} updated_at - The time the position was last updated in milliseconds.
   * @example 1622548800000
   */
  updated_at: number;
}

/**
 * @interface ListFinishedPositionParams
 * @description Parameters for listing finished futures positions.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-finished-position
 */
export interface ListFinishedPositionParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of positions per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListFinishedPositionResponse
 * @description The response for the listFinishedPosition method.
 */
export interface ListFinishedPositionResponse {
  data: Position[];
  pagination: Pagination;
}

/**
 * @interface ListPendingPositionParams
 * @description Parameters for listing pending futures positions.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-pending-position
 */
export interface ListPendingPositionParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
}

/**
 * @interface ListPendingPositionResponse
 * @description The response for the listPendingPosition method.
 */
export type ListPendingPositionResponse = Position[];

/**
 * @interface PositionAdlHistory
 * @description Represents the auto-deleveraging history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-positiing-adl-history
 */
export interface PositionAdlHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {PositionSide} side - The side of the position.
   * @example "long"
   */
  side: PositionSide;
  /**
   * @property {string} adl_price - The auto-deleveraging price.
   * @example "40000.00"
   */
  adl_price: string;
  /**
   * @property {string} adl_amount - The auto-deleveraging amount.
   * @example "0.1"
   */
  adl_amount: string;
  /**
   * @property {string} adl_value - The auto-deleveraging value.
   * @example "4000.00"
   */
  adl_value: string;
  /**
   * @property {number} created_at - The time of the event in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
}

/**
 * @interface ListPositionAdlHistoryParams
 * @description Parameters for listing the auto-deleveraging history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-positiing-adl-history
 */
export interface ListPositionAdlHistoryParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of records per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListPositionAdlHistoryResponse
 * @description The response for the listPositionAdlHistory method.
 */
export interface ListPositionAdlHistoryResponse {
  data: PositionAdlHistory[];
  pagination: Pagination;
}

/**
 * @interface PositionFundingHistory
 * @description Represents the funding history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-funding-history
 */
export interface PositionFundingHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} funding_rate - The funding rate.
   * @example "0.0001"
   */
  funding_rate: string;
  /**
   * @property {string} funding_fee - The funding fee.
   * @example "1.23"
   */
  funding_fee: string;
  /**
   * @property {number} created_at - The time of the event in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
}

/**
 * @interface ListPositionFundingHistoryParams
 * @description Parameters for listing the funding history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-funding-history
 */
export interface ListPositionFundingHistoryParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of records per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListPositionFundingHistoryResponse
 * @description The response for the listPositionFundingHistory method.
 */
export interface ListPositionFundingHistoryResponse {
  data: PositionFundingHistory[];
  pagination: Pagination;
}

/**
 * @interface PositionMarginHistory
 * @description Represents the margin history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-margin-history
 */
export interface PositionMarginHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} amount - The amount of margin changed.
   * @example "100.00"
   */
  amount: string;
  /**
   * @property {1 | 2} type - The type of change (1 for add, 2 for remove).
   * @example 1
   */
  type: 1 | 2;
  /**
   * @property {number} created_at - The time of the event in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
}

/**
 * @interface ListPositionMarginHistoryParams
 * @description Parameters for listing the margin history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-margin-history
 */
export interface ListPositionMarginHistoryParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of records per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListPositionMarginHistoryResponse
 * @description The response for the listPositionMarginHistory method.
 */
export interface ListPositionMarginHistoryResponse {
  data: PositionMarginHistory[];
  pagination: Pagination;
}

/**
 * @interface PositionSettleHistory
 * @description Represents the settlement history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-settle-history
 */
export interface PositionSettleHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} settle_price - The settlement price.
   * @example "45000.00"
   */
  settle_price: string;
  /**
   * @property {number} created_at - The time of the event in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
}

/**
 * @interface ListPositionSettleHistoryParams
 * @description Parameters for listing the settlement history of a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-settle-history
 */
export interface ListPositionSettleHistoryParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of records per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListPositionSettleHistoryResponse
 * @description The response for the listPositionSettleHistory method.
 */
export interface ListPositionSettleHistoryResponse {
  data: PositionSettleHistory[];
  pagination: Pagination;
}

/**
 * @interface SetPositionStopLossParams
 * @description Parameters for setting the stop-loss price for a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/set-position-stop-loss
 */
export interface SetPositionStopLossParams {
  /**
   * @property {string} market - The market to set the stop-loss for.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} stop_loss_price - The stop-loss price.
   * @example "39000.00"
   */
  stop_loss_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   * @example "latest_price"
   */
  trigger_price_type: TriggerPriceType;
}

/**
 * @interface SetPositionTakeProfitParams
 * @description Parameters for setting the take-profit price for a futures position.
 * @see https://docs.coinex.com/api/v2/futures/position/http/set-position-take-profit
 */
export interface SetPositionTakeProfitParams {
  /**
   * @property {string} market - The market to set the take-profit for.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} take_profit_price - The take-profit price.
   * @example "50000.00"
   */
  take_profit_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   * @example "latest_price"
   */
  trigger_price_type: TriggerPriceType;
}
