import { type Pagination } from '../../account/subaccount/types';

/**
 * @interface GetMarginBorrowHistoryParams
 * @description Parameters for getting margin borrow history
 * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/list-margin-borrow-history
 */
export interface GetMarginBorrowHistoryParams {
  /**
   * @property {string} [market] - Market name
   * @description If not passed, all markets will be returned.
   * @example "BTCUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - Page number
   * @default 1
   */
  page?: number;
  /**
   * @property {number} [limit] - Number of records per page
   * @default 100
   */
  limit?: number;
}

/**
 * @interface MarginBorrowHistory
 * @description Margin borrow history
 */
export interface MarginBorrowHistory {
  /**
   * @property {string} market - Market name
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} amount - Borrow amount
   * @example "100"
   */
  amount: string;
  /**
   * @property {number} created_at - Creation time
   * @example 1614837902000
   */
  created_at: number;
}

/**
 * @interface GetMarginBorrowHistoryResponse
 * @description Response for getting margin borrow history
 */
export interface GetMarginBorrowHistoryResponse {
  data: MarginBorrowHistory[];
  pagination: Pagination;
}

/**
 * @interface GetMarginInterestLimitParams
 * @description Parameters for getting margin interest limit
 * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/list-margin-interest-limit
 */
export interface GetMarginInterestLimitParams {
  /**
   * @property {string} market - Market name
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
}

/**
 * @interface MarginInterestLimit
 * @description Margin interest limit
 */
export interface MarginInterestLimit {
  /**
   * @property {string} min_amount - Minimum borrow amount
   * @example "10"
   */
  min_amount: string;
  /**
   * @property {string} max_amount - Maximum borrow amount
   * @example "10000"
   */
  max_amount: string;
  /**
   * @property {string} daily_interest_rate - Daily interest rate
   * @example "0.001"
   */
  daily_interest_rate: string;
}

/**
 * @interface GetMarginInterestLimitResponse
 * @description Response for getting margin interest limit
 */
export type GetMarginInterestLimitResponse = MarginInterestLimit;

/**
 * @interface MarginBorrowParams
 * @description Parameters for margin borrow
 * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/margin-borrow
 */
export interface MarginBorrowParams {
  /**
   * @property {string} market - Market name
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} amount - Borrow amount
   * @example "100"
   */
  amount: string;
}

/**
 * @interface MarginRepayParams
 * @description Parameters for margin repay
 * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/margin-repay
 */
export interface MarginRepayParams {
  /**
   * @property {string} market - Market name
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} amount - Repay amount
   * @example "100"
   */
  amount: string;
}
