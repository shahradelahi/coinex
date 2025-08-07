/**
 * @interface MaintenanceInfo
 * @description Represents the maintenance information for the CoinEx platform.
 * @see https://docs.coinex.com/api/v2/common/maintain/http/get-maintenance-info
 */
export interface MaintenanceInfo {
  /**
   * @property {number} started_at - The start time of the maintenance in milliseconds.
   * @example 1622548800000
   */
  started_at: number;
  /**
   * @property {number} ended_at - The end time of the maintenance in milliseconds.
   * @example 1622635200000
   */
  ended_at: number;
  /**
   * @property {('FUTURES' | 'SPOT' | 'ALL_SITE')[]} scope - The scope of the maintenance.
   * @example ["ALL_SITE"]
   */
  scope: ('FUTURES' | 'SPOT' | 'ALL_SITE')[];
  /**
   * @property {string} announce_url - The URL for the maintenance announcement.
   * @example "https://www.coinex.com/announcement/123"
   */
  announce_url: string;
  /**
   * @property {boolean} announce_enabled - Whether the announcement is enabled.
   * @example true
   */
  announce_enabled: boolean;
  /**
   * @property {number} protect_duration_start - The start time of the protection duration in milliseconds.
   * @example 1622548800000
   */
  protect_duration_start: number;
  /**
   * @property {number} protect_duration_end - The end time of the protection duration in milliseconds.
   * @example 1622635200000
   */
  protect_duration_end: number;
}

/**
 * @interface GetMaintenanceInfoResponse
 * @description The response for the getMaintenanceInfo method.
 * @see https://docs.coinex.com/api/v2/common/maintain/http/get-maintenance-info
 */
export type GetMaintenanceInfoResponse = MaintenanceInfo[];
