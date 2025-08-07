import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  GetMarginBorrowHistoryParams,
  GetMarginBorrowHistoryResponse,
  GetMarginInterestLimitParams,
  GetMarginInterestLimitResponse,
  MarginBorrowParams,
  MarginRepayParams,
} from './types';

export class BorrowRepay {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get Borrowing Record in Margin Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetMarginBorrowHistoryResponse>} The margin borrow history.
   * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/list-margin-borrow-history
   */
  getMarginBorrowHistory(
    params: GetMarginBorrowHistoryParams,
    options: RequestOptions = {}
  ): Promise<GetMarginBorrowHistoryResponse> {
    return this.#client.request<GetMarginBorrowHistoryResponse>(
      'assets/margin-borrow-history',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
        },
        options
      )
    );
  }

  /**
   * Get Borrowing Limit
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetMarginInterestLimitResponse>} The margin interest limit.
   * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/list-margin-interest-limit
   */
  getMarginInterestLimit(
    params: GetMarginInterestLimitParams,
    options: RequestOptions = {}
  ): Promise<GetMarginInterestLimitResponse> {
    return this.#client.request<GetMarginInterestLimitResponse>(
      'assets/margin-interest-limit',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
        },
        options
      )
    );
  }

  /**
   * Margin Loan
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/margin-borrow
   */
  marginBorrow(params: MarginBorrowParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/margin-borrow',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Margin Repayment
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/loan-flat/http/margin-repay
   */
  marginRepay(params: MarginRepayParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/margin-repay',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
