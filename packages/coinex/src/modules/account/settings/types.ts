import { type PositionSide } from '@coinex-org/internal-shared';

/**
 * @interface GetFuturesMarketSettingsResponse
 * @description Response for getting futures market settings.
 * @see https://docs.coinex.com/api/v2/account/settings/http/accquire-futures-market-settings
 */
export interface GetFuturesMarketSettingsResponse {
  /**
   * @property {string[]} markets - List of markets.
   * @example ["BTCUSDT", "ETHUSDT"]
   */
  markets: string[];
  /**
   * @property {PositionSide} position_side - Position side.
   * @example PositionSide.LONG
   */
  position_side: PositionSide;
}

/**
 * @interface ModifyAccountSettingsParams
 * @description Parameters for modifying account settings.
 * @see https://docs.coinex.com/api/v2/account/settings/http/modify-account-settings
 */
export interface ModifyAccountSettingsParams {
  /**
   * @property {boolean} cet_enabled - Whether to use CET as transaction fee.
   * @example true
   */
  cet_enabled: boolean;
}

/**
 * @interface ModifyFuturesMarketSettingsParams
 * @description Outlines the parameters for modifying futures market settings, including the markets and position side.
 * @see https://docs.coinex.com/api/v2/account/settings/http/modify-futures-market-settings
 */
export interface ModifyFuturesMarketSettingsParams {
  /**
   * @property {string[]} markets - List of markets.
   * @example ["BTCUSDT", "ETHUSDT"]
   */
  markets: string[];
  /**
   * @property {PositionSide} position_side - Position side.
   * @example PositionSide.LONG
   */
  position_side: PositionSide;
}
