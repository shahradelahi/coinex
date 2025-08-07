/**
 * @enum MarketType
 * @description Enumeration of market types.
 */
export enum MarketType {
  SPOT = 'SPOT',
  MARGIN = 'MARGIN',
  FUTURES = 'FUTURES',
}

/**
 * @enum MarketStatus
 * @description Enumeration of market statuses.
 */
export enum MarketStatus {
  BIDDING = 'bidding',
  COUNTING_DOWN = 'counting_down',
  ONLINE = 'online',
}

/**
 * @enum OrderSide
 * @description Enumeration of order sides.
 */
export enum OrderSide {
  BUY = 'buy',
  SELL = 'sell',
}

/**
 * @enum OrderType
 * @description Enumeration of order types.
 */
export enum OrderType {
  LIMIT = 'limit',
  MARKET = 'market',
  MAKER_ONLY = 'maker_only',
  IOC = 'ioc',
  FOK = 'fok',
}

/**
 * @enum StpMode
 * @description Enumeration of STP (Self-Trade Prevention) modes.
 */
export enum StpMode {
  CANCEL_TAKER = 'ct',
  CANCEL_MAKER = 'cm',
  CANCEL_BOTH = 'both',
}

/**
 * @enum OrderEvent
 * @description Enumeration of order events.
 */
export enum OrderEvent {
  PUT = 'put',
  UPDATE = 'update',
  MODIFY = 'modify',
  FINISH = 'finish',
}

/**
 * @enum StopOrderEvent
 * @description Enumeration of stop order events.
 */
export enum StopOrderEvent {
  PUT = 'put',
  ACTIVE = 'active',
  CANCEL = 'cancel',
}

/**
 * @enum StopOrderStatus
 * @description Enumeration of stop order statuses.
 */
export enum StopOrderStatus {
  PUT = 'put',
  ACTIVE_SUCCESS = 'active_success',
  ACTIVE_FAIL = 'active_fail',
  CANCEL = 'cancel',
}

/**
 * @enum TriggerDirection
 * @description Enumeration of trigger directions.
 */
export enum TriggerDirection {
  HIGHER = 'higher',
  LOWER = 'lower',
}

/**
 * @enum PositionEvent
 * @description Enumeration of position events.
 */
export enum PositionEvent {
  UPDATE = 'update',
  CLOSE = 'close',
  SYS_CLOSE = 'sys_close',
  ADL = 'adl',
  LIQ = 'liq',
}

/**
 * @enum Locale
 * @description Enumeration of supported locales.
 */
export enum Locale {
  DE_DE = 'de-DE',
  EN_US = 'en-US',
  ES_AR = 'es-AR',
  ES_ES = 'es-ES',
  ES_MX = 'es-MX',
  FR_FR = 'fr-FR',
  KK_KZ = 'kk-KZ',
  ID_ID = 'id-ID',
  UK_UA = 'uk-UA',
  JA_JP = 'ja-JP',
  RU_RU = 'ru-RU',
  TH_TH = 'th-TH',
  PT_BR = 'pt-BR',
  TR_TR = 'tr-TR',
  VI_VN = 'vi-VN',
  ZH_TW = 'zh-TW',
  AR_SA = 'ar-SA',
  HI_IN = 'hi-IN',
  FIL_PH = 'fil-PH',
}

/**
 * @enum Permission
 * @description Enumeration of sub-account permissions.
 */
export enum Permission {
  FUTURES = 'FUTURES',
  MARGIN = 'MARGIN',
  AMM = 'AMM',
  API = 'API',
}

/**
 * @enum TransferDirection
 * @description Enumeration of transfer directions.
 */
export enum TransferDirection {
  IN = 'in',
  OUT = 'out',
}

/**
 * @enum TransferStatus
 * @description Enumeration of transfer statuses.
 */
export enum TransferStatus {
  CREATED = 'created',
  DEDUCTED = 'deducted',
  FAILED = 'failed',
  FINISHED = 'finished',
}

/**
 * @enum LoanStatus
 * @description Enumeration of loan statuses.
 */
export enum LoanStatus {
  LOAN = 'loan',
  DEBT = 'debt',
  LIQUIDATED = 'liquidated',
  FINISH = 'finish',
}

/**
 * @enum DepositStatus
 * @description Enumeration of deposit statuses.
 */
export enum DepositStatus {
  PROCESSING = 'processing',
  CONFIRMING = 'confirming',
  CANCELLED = 'cancelled',
  FINISHED = 'finished',
  TOO_SMALL = 'too_small',
  EXCEPTION = 'exception',
}

/**
 * @enum WithdrawStatus
 * @description Enumeration of withdrawal statuses.
 */
export enum WithdrawStatus {
  CREATED = 'created',
  AUDIT_REQUIRED = 'audit_required',
  AUDITED = 'audited',
  PROCESSING = 'processing',
  CONFIRMING = 'confirming',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
  CANCELLATION_FAILED = 'cancellation_failed',
  FAILED = 'failed',
}

/**
 * @enum OrderStatus
 * @description Enumeration of order statuses.
 */
export enum OrderStatus {
  OPEN = 'open',
  PART_FILLED = 'part_filled',
  FILLED = 'filled',
  PART_CANCELED = 'part_canceled',
  CANCELED = 'canceled',
}

/**
 * @enum ContractType
 * @description Enumeration of contract types.
 */
export enum ContractType {
  LINEAR = 'linear',
  INVERSE = 'inverse',
}

/**
 * @enum MarginMode
 * @description Enumeration of margin modes.
 */
export enum MarginMode {
  ISOLATED = 'isolated',
  CROSS = 'cross',
}

/**
 * @enum TakeProfitType
 * @description Enumeration of take profit types.
 */
export enum TakeProfitType {
  LATEST_PRICE = 'latest_price',
  MARK_PRICE = 'mark_price',
}

/**
 * @enum StopLossType
 * @description Enumeration of stop loss types.
 */
export enum StopLossType {
  LATEST_PRICE = 'latest_price',
  MARK_PRICE = 'mark_price',
}

/**
 * @enum PositionSide
 * @description Enumeration of position sides.
 */
export enum PositionSide {
  SHORT = 'short',
  LONG = 'long',
}

/**
 * @enum PositionFinishedType
 * @description Enumeration of position finished types.
 */
export enum PositionFinishedType {
  LIQ = 'liq',
  ADL = 'adl',
  SYS = 'sys',
  LIMIT = 'limit',
  MARKET = 'market',
  MARKET_CLOSE_ALL = 'market_close_all',
  TAKE_PROFIT = 'take_profit',
  STOP_LOSS = 'stop_loss',
}

/**
 * @enum TriggerPriceType
 * @description Enumeration of trigger price types.
 */
export enum TriggerPriceType {
  LATEST_PRICE = 'latest_price',
  MARK_PRICE = 'mark_price',
  INDEX_PRICE = 'index_price',
}

/**
 * @enum TransactionType
 * @description Enumeration of transaction types.
 */
export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  TRADE = 'trade',
  MAKER_CASH_BACK = 'maker_cash_back',
}

/**
 * @enum AmmType
 * @description Enumeration of AMM types.
 */
export enum AmmType {
  INFINITE = 'infinite',
  FINITE = 'finite',
}

/**
 * @enum UserType
 * @description Enumeration of user types.
 */
export enum UserType {
  NORMAL = 'NORMAL',
  SUB_ACCOUNT = 'SUB_ACCOUNT',
}
