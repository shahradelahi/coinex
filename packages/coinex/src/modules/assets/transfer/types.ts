import { type Pagination } from '../../account/subaccount/types';

/**
 * @interface GetAssetTransferHistoryParams
 * @description Parameters for getting asset transfer history
 * @see https://docs.coinex.com/api/v2/assets/transfer/http/list-transfer-history
 */
export interface GetAssetTransferHistoryParams {
  /**
   * @property {string} [ccy] - Currency name
   * @description If not passed, all currencies will be returned.
   * @example "USDT"
   */
  ccy?: string;
  /**
   * @property {string} [status] - Transfer status
   * @example "success"
   */
  status?: string;
  /**
   * @property {number} [start_time] - Start time
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - End time
   */
  end_time?: number;
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
 * @interface AssetTransferHistory
 * @description Asset transfer history
 */
export interface AssetTransferHistory {
  /**
   * @property {number} transfer_id - Transfer ID
   * @example 12345
   */
  transfer_id: number;
  /**
   * @property {string} from_account_type - From account type
   * @example "spot"
   */
  from_account_type: string;
  /**
   * @property {string} to_account_type - To account type
   * @example "margin"
   */
  to_account_type: string;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} amount - Transfer amount
   * @example "100"
   */
  amount: string;
  /**
   * @property {string} status - Transfer status
   * @example "success"
   */
  status: string;
  /**
   * @property {number} created_at - Creation time
   * @example 1614837902000
   */
  created_at: number;
}

/**
 * @interface GetAssetTransferHistoryResponse
 * @description Response for getting asset transfer history
 */
export interface GetAssetTransferHistoryResponse {
  data: AssetTransferHistory[];
  pagination: Pagination;
}

/**
 * @interface TransferParams
 * @description Parameters for making a transfer
 * @see https://docs.coinex.com/api/v2/assets/transfer/http/transfer
 */
export interface TransferParams {
  /**
   * @property {string} from_account_type - From account type
   * @example "spot"
   */
  from_account_type: string;
  /**
   * @property {string} to_account_type - To account type
   * @example "margin"
   */
  to_account_type: string;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} amount - Transfer amount
   * @example "100"
   */
  amount: string;
}
