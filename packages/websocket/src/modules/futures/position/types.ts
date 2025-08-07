import {
  MarginMode,
  PositionEvent,
  PositionSide,
  StopLossType,
  TakeProfitType,
} from '@coinex-org/internal-shared';

/**
 * @interface FuturesPositionSubscriptionParams
 * @description Parameters for subscribing to user position updates.
 */
export interface FuturesPositionSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface FuturesPositionUnsubscribeParams
 * @description Parameters for unsubscribing from user position updates.
 */
export interface FuturesPositionUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface FuturesPosition
 * @description Represents a single user position.
 */
export interface FuturesPosition {
  /**
   * @property {number} position_id - Position ID.
   */
  position_id: number;
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {PositionSide} side - Position side, long or short.
   */
  side: PositionSide;
  /**
   * @property {MarginMode} margin_mode - Position type, cross or isolated.
   */
  margin_mode: MarginMode;
  /**
   * @property {string} open_interest - Position.
   */
  open_interest: string;
  /**
   * @property {string} close_avbl - Amount that's available for position closing.
   */
  close_avbl: string;
  /**
   * @property {string} ath_position_amount - ATH position amount.
   */
  ath_position_amount: string;
  /**
   * @property {string} unrealized_pnl - Unrealized PNL.
   */
  unrealized_pnl: string;
  /**
   * @property {string} realized_pnl - Realized PNL.
   */
  realized_pnl: string;
  /**
   * @property {string} avg_entry_price - Average entry price.
   */
  avg_entry_price: string;
  /**
   * @property {string} cml_position_value - Cumulative position value.
   */
  cml_position_value: string;
  /**
   * @property {string} max_position_value - Max. position value.
   */
  max_position_value: string;
  /**
   * @property {string} take_profit_price - Take-profit price.
   */
  take_profit_price: string;
  /**
   * @property {string} stop_loss_price - Stop-loss price.
   */
  stop_loss_price: string;
  /**
   * @property {TakeProfitType} take_profit_type - Take profit trigger price type, latest_price or mark_price.
   */
  take_profit_type: TakeProfitType;
  /**
   * @property {StopLossType} stop_loss_type - Stop loss trigger price type, latest_price or mark_price.
   */
  stop_loss_type: StopLossType;
  /**
   * @property {string} leverage - Leverage.
   */
  leverage: string;
  /**
   * @property {string} margin_avbl - Margin available.
   */
  margin_avbl: string;
  /**
   * @property {string} ath_margin_size - ATH margin amount.
   */
  ath_margin_size: string;
  /**
   * @property {string} position_margin_rate - Position margin rate.
   */
  position_margin_rate: string;
  /**
   * @property {string} maintenance_margin_rate - Maintenance margin rate.
   */
  maintenance_margin_rate: string;
  /**
   * @property {string} maintenance_margin_value - Maintenance margin amount.
   */
  maintenance_margin_value: string;
  /**
   * @property {string} liq_price - Liquidation price.
   */
  liq_price: string;
  /**
   * @property {string} bkr_price - Bankruptcy price.
   */
  bkr_price: string;
  /**
   * @property {number} adl_level - Auto-deleveraging level.
   */
  adl_level: number;
  /**
   * @property {string} settle_price - Settlement price, calculated as mark price.
   */
  settle_price: string;
  /**
   * @property {string} settle_val - Settlement value, calculated as mark price.
   */
  settle_val: string;
  /**
   * @property {string} first_filled_price - The first filled price of the position.
   */
  first_filled_price: string;
  /**
   * @property {string} latest_filled_price - The latest filled price of the position.
   */
  latest_filled_price: string;
  /**
   * @property {number} created_at - Position creation timestamp (milliseconds).
   */
  created_at: number;
  /**
   * @property {number} updated_at - Position update timestamp (milliseconds).
   */
  updated_at: number;
}

/**
 * @interface FuturesPositionUpdate
 * @description Represents a user position update push from the server.
 */
export interface FuturesPositionUpdate {
  /**
   * @property {PositionEvent} event - Position update event type.
   */
  event: PositionEvent;
  /**
   * @property {FuturesPosition} position - Position info.
   */
  position: FuturesPosition;
}
