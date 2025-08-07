import {
  type Permission,
  type TransferDirection,
  type UserType,
} from '@coinex-org/internal-shared';

/**
 * @interface CreateSubAccountParams
 * @description Parameters for creating a sub-account.
 */
export interface CreateSubAccountParams {
  /**
   * @property {string} sub_user_name - Sub-account username.
   * @description 3-26 characters, can only contain numbers, letters and English symbols "-". Cannot be the same as an existing sub-account name.
   * @example "sub2"
   */
  sub_user_name: string;
  /**
   * @property {Permission[]} [permissions] - Sub-user permissions. The sub-account created by default has full permissions.
   * @example [Permission.AMM, Permission.MARGIN]
   */
  permissions?: Permission[];
  /**
   * @property {string} [remark] - Sub-account note. The length of the note cannot exceed 50 characters.
   * @example "spot market maker"
   */
  remark?: string;
}

/**
 * @interface GetSubAccountListParams
 * @description Parameters for getting the sub-account list.
 */
export interface GetSubAccountListParams {
  /**
   * @property {string} [sub_user_name] - Sub-account username.
   */
  sub_user_name?: string;
  /**
   * @property {boolean} [is_frozen] - Frozen or not. Default is false.
   */
  is_frozen?: boolean;
  /**
   * @property {number} [page] - Number of pagination. Default is 1.
   */
  page?: number;
  /**
   * @property {number} [limit] - Number in each page. Default is 10.
   */
  limit?: number;
}

/**
 * @interface SubAccountInfo
 * @description Information about a single sub-account.
 */
export interface SubAccountInfo {
  /**
   * @property {string} sub_user_name - Sub-account username.
   * @example "sub2"
   */
  sub_user_name: string;
  /**
   * @property {boolean} is_frozen - Whether the sub-account is frozen or not.
   * @example true
   */
  is_frozen: boolean;
  /**
   * @property {boolean} is_authorized - Whether it is authorized or not.
   * @example false
   */
  is_authorized: boolean;
  /**
   * @property {Permission[]} permissions - Sub-account permission list.
   * @example [Permission.FUTURES, Permission.API]
   */
  permissions: Permission[];
  /**
   * @property {string} balance_usd - Market value of sub-account balance.
   * @example "3564.23"
   */
  balance_usd: string;
}

/**
 * @interface Pagination
 * @description Pagination information for list responses.
 */
export interface Pagination {
  /**
   * @property {number} total - Total number of items.
   * @example 1
   */
  total: number;
  /**
   * @property {boolean} has_next - Whether there is a next page.
   * @example false
   */
  has_next: boolean;
}

/**
 * @interface GetSubAccountListResponse
 * @description The response for the getSubAccountList method.
 */
export interface GetSubAccountListResponse {
  data: SubAccountInfo[];
  pagination: Pagination;
}

/**
 * @interface DisableSubAccountParams
 * @description Parameters for disabling a sub-account.
 */
export interface DisableSubAccountParams {
  /**
   * @property {string} sub_user_name - Sub-account username.
   * @example "sub2"
   */
  sub_user_name: string;
}

/**
 * @interface EnableSubAccountParams
 * @description Parameters for enabling a sub-account.
 */
export interface EnableSubAccountParams {
  /**
   * @property {string} sub_user_name - Sub-account username.
   * @example "sub2"
   */
  sub_user_name: string;
}

/**
 * @interface CreateSubAccountApiKeyParams
 * @description Parameters for creating a sub-account API key.
 */
export interface CreateSubAccountApiKeyParams {
  /**
   * @property {string} sub_user_name - Sub-account username.
   */
  sub_user_name: string;
  /**
   * @property {string[]} ip_whitelist - The IP whitelist bound to API KEY. Up to 50 IPs can be bound.
   */
  ip_whitelist: string[];
  /**
   * @property {boolean} trade_enabled - Whether the API KEY has trading permissions.
   */
  trade_enabled: boolean;
  /**
   * @property {string} [remark] - API KEY note. The length of the note cannot exceed 50 characters.
   */
  remark?: string;
}

/**
 * @interface SubAccountApiKey
 * @description Information about a sub-account API key.
 */
export interface SubAccountApiKey {
  /**
   * @property {number} api_id - Unique ID for API KEY.
   */
  api_id: number;
  /**
   * @property {number} created_at - Data creation time.
   */
  created_at: number;
  /**
   * @property {string} access_id - access_id of the key pair.
   */
  access_id: string;
  /**
   * @property {string} secret_key - secret_key of the key pair.
   */
  secret_key: string;
  /**
   * @property {string[]} ip_whitelist - The IP whitelist bound to API KEY.
   */
  ip_whitelist: string[];
  /**
   * @property {boolean} trade_enabled - Whether the API KEY has trading permissions.
   */
  trade_enabled: boolean;
  /**
   * @property {boolean} withdraw_enabled - Whether the API KEY has withdrawal permissions.
   */
  withdraw_enabled: boolean;
  /**
   * @property {boolean} is_expired - Whether the API KEY has expired.
   */
  is_expired: boolean;
  /**
   * @property {number} expires_at - Expiration time of API KEY. 0 means the API KEY is permanently valid.
   */
  expires_at: number;
  /**
   * @property {string} remark - API KEY note.
   */
  remark: string;
}

/**
 * @interface GetSubAccountApiKeyDetailParams
 * @description Parameters for getting sub-account API key detail.
 */
export interface GetSubAccountApiKeyDetailParams {
  /**
   * @property {number} api_id - Unique ID for API KEY.
   */
  api_id: number;
}

/**
 * @interface GetSubAccountInfoResponse
 * @description The response for the getSubAccountInfo method.
 * @see https://docs.coinex.com/api/v2/account/subs/http/get-sub-info
 */
export interface GetSubAccountInfoResponse {
  /**
   * @property {UserType} user_type - User Types.
   * @example UserType.SUB_ACCOUNT
   */
  user_type: UserType;
  /**
   * @property {string | null} sub_user_name - Sub-account username. If it is an ordinary user, this value is null.
   * @example "sub1"
   */
  sub_user_name: string | null;
}

/**
 * @interface SubAccountTransferParams
 * @description Parameters for transferring assets between sub-accounts.
 * @see https://docs.coinex.com/api/v2/account/subs/http/sub-transfer
 */
export interface SubAccountTransferParams {
  /**
   * @property {string} from_sub_user_name - The username of the sub-account to transfer from.
   */
  from_sub_user_name: string;
  /**
   * @property {string} to_sub_user_name - The username of the sub-account to transfer to.
   */
  to_sub_user_name: string;
  /**
   * @property {string} ccy - The currency to transfer.
   */
  ccy: string;
  /**
   * @property {string} amount - The amount to transfer.
   */
  amount: string;
}

/**
 * @interface GetSubAccountTransferHistoryParams
 * @description Parameters for getting the transfer history of a sub-account.
 * @see https://docs.coinex.com/api/v2/account/subs/http/list-sub-transfer-history
 */
export interface GetSubAccountTransferHistoryParams {
  /**
   * @property {string} sub_user_name - The username of the sub-account.
   */
  sub_user_name: string;
  /**
   * @property {TransferDirection} [direction] - The direction of the transfer.
   */
  direction?: TransferDirection;
  /**
   * @property {string} [ccy] - The currency of the transfer.
   */
  ccy?: string;
  /**
   * @property {number} [start_time] - The start time of the query range.
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range.
   */
  end_time?: number;
  /**
   * @property {number} [page] - The page number.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of records to return.
   */
  limit?: number;
}

/**
 * @interface SubAccountTransferHistory
 * @description Information about a sub-account transfer.
 */
export interface SubAccountTransferHistory {
  /**
   * @property {string} from_sub_user_name - The username of the sub-account that sent the transfer.
   */
  from_sub_user_name: string;
  /**
   * @property {string} to_sub_user_name - The username of the sub-account that received the transfer.
   */
  to_sub_user_name: string;
  /**
   * @property {string} ccy - The currency of the transfer.
   */
  ccy: string;
  /**
   * @property {string} amount - The amount of the transfer.
   */
  amount: string;
  /**
   * @property {number} created_at - The time the transfer was created.
   */
  created_at: number;
}

/**
 * @interface GetSubAccountTransferHistoryResponse
 * @description The response for the getSubAccountTransferHistory method.
 */
export interface GetSubAccountTransferHistoryResponse {
  data: SubAccountTransferHistory[];
  pagination: Pagination;
}

/**
 * @interface GetSubAccountApiKeyListParams
 * @description Parameters for getting the API key list of a sub-account.
 * @see https://docs.coinex.com/api/v2/account/subs/http/list-sub-api
 */
export interface GetSubAccountApiKeyListParams {
  /**
   * @property {string} sub_user_name - The username of the sub-account.
   */
  sub_user_name: string;
}

/**
 * @interface GetSubAccountApiKeyListResponse
 * @description The response for the getSubAccountApiKeyList method.
 */
export interface GetSubAccountApiKeyListResponse {
  data: SubAccountApiKey[];
}

/**
 * @interface GetSubAccountSpotBalanceParams
 * @description Parameters for getting the spot balance of a sub-account.
 * @see https://docs.coinex.com/api/v2/account/subs/http/get-sub-spot-balance
 */
export interface GetSubAccountSpotBalanceParams {
  /**
   * @property {string} sub_user_name - The username of the sub-account.
   */
  sub_user_name: string;
  /**
   * @property {string} [ccy] - The currency to query.
   */
  ccy?: string;
}

/**
 * @interface SubAccountSpotBalance
 * @description Information about a sub-account spot balance.
 */
export interface SubAccountSpotBalance {
  /**
   * @property {string} ccy - The currency.
   */
  ccy: string;
  /**
   * @property {string} available - The available balance.
   */
  available: string;
  /**
   * @property {string} frozen - The frozen balance.
   */
  frozen: string;
}

/**
 * @type GetSubAccountSpotBalanceResponse
 * @description Represents the response for a sub-account's spot balance, which is an array of balance details per currency.
 */
export type GetSubAccountSpotBalanceResponse = SubAccountSpotBalance[];

/**
 * @interface EditSubAccountApiKeyParams
 * @description Parameters for editing a sub-account API key.
 * @see https://docs.coinex.com/api/v2/account/subs/http/edit-sub-api
 */
export interface EditSubAccountApiKeyParams {
  /**
   * @property {string} sub_user_name - The username of the sub-account.
   */
  sub_user_name: string;
  /**
   * @property {number} api_id - The ID of the API key to edit.
   */
  api_id: number;
  /**
   * @property {string[]} [ip_whitelist] - The new IP whitelist.
   */
  ip_whitelist?: string[];
  /**
   * @property {boolean} [trade_enabled] - Whether to enable trading.
   */
  trade_enabled?: boolean;
  /**
   * @property {string} [remark] - The new remark.
   */
  remark?: string;
}

/**
 * @interface DeleteSubAccountApiKeyParams
 * @description Parameters for deleting a sub-account API key.
 * @see https://docs.coinex.com/api/v2/account/subs/http/delete-sub-api
 */
export interface DeleteSubAccountApiKeyParams {
  /**
   * @property {string} sub_user_name - The username of the sub-account.
   */
  sub_user_name: string;
  /**
   * @property {number} api_id - The ID of the API key to delete.
   */
  api_id: number;
}
