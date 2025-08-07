import { type MarketType } from '@coinex-org/internal-shared';

/**
 * @interface GetAccountTradeFeesParams
 * @description Parameters for getting the account trading fee rate.
 * @see https://docs.coinex.com/api/v2/account/fees/http/get-account-trade-fees
 */
export interface GetAccountTradeFeesParams {
  /**
   * @property {MarketType} [market_type] - Market type.
   * @description If not passed, the default is spot market.
   * @example MarketType.SPOT
   */
  market_type?: MarketType;
}

/**
 * @interface Fee
 * @description Trading fee rate details.
 */
export interface Fee {
  /**
   * @property {string} market - Market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} taker_fee - Taker fee rate.
   * @example "0.002"
   */
  taker_fee: string;
  /**
   * @property {string} maker_fee - Maker fee rate.
   * @example "0.001"
   */
  maker_fee: string;
}

/**
 * @type GetAccountTradeFeesResponse
 * @description Represents the response from the Get Account Trading Fee Rate endpoint, which is an array of fee structures.
 */
export type GetAccountTradeFeesResponse = Fee[];
