# @coinex-org/coinex

A lightweight, type-safe TypeScript client for the official CoinEx API v2.

## Features

- **Type-Safe:** Fully typed requests and responses for better developer experience and fewer runtime errors.
- **Comprehensive:** Covers all major V2 API modules including Spot, Futures, Account, and Assets.
- **Modern:** Built with modern tools and libraries, including `ky` for HTTP requests.
- **Clear Documentation:** All methods and types are documented with JSDoc, linking back to the official CoinEx API documentation.

## Installation

```bash
npm install @coinex-org/coinex
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install @coinex-org/coinex
```

**yarn**

```bash
yarn add @coinex-org/coinex
```

</details>

## Usage

First, you need to import and initialize the `CoinExClient` with your API Key and Secret Key.

```typescript
import { CoinExClient } from '@coinex-org/coinex';

const client = new CoinExClient({
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});

// Example: Get server time (public endpoint)
const serverTime = await client.getSystemTime();
console.log('Server Time:', serverTime);

// Example: Get account information (private endpoint)
const accountInfo = await client.account.getAccountInfo();
console.log('Account Info:', accountInfo);

// Example: Get spot market list
const spotMarkets = await client.spot.market.listMarket();
console.log('Spot Markets:', spotMarkets.slice(0, 5)); // Log first 5 for brevity
```

## Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@coinex-org/coinex).

## API Modules

The client is organized into modules that mirror the official CoinEx API structure.

### Common

- [`client.ping()`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3Aping&type=code): Ping the server.
- [`client.getSystemTime()`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSystemTime&type=code): Get the server time.

### Account (`client.account`)

- **Subaccount**: [`createSubAccount`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcreateSubAccount&type=code), [`getSubAccountList`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSubAccountList&type=code), [`disableSubAccount`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AdisableSubAccount&type=code), [`enableSubAccount`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AenableSubAccount&type=code), [`createSubAccountApiKey`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcreateSubAccountApiKey&type=code), [`getSubAccountApiKeyDetail`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSubAccountApiKeyDetail&type=code), [`getSubAccountInfo`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSubAccountInfo&type=code), [`subAccountTransfer`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AsubAccountTransfer&type=code), [`getSubAccountTransferHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSubAccountTransferHistory&type=code), [`getSubAccountApiKeyList`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSubAccountApiKeyList&type=code), [`getSubAccountSpotBalance`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSubAccountSpotBalance&type=code), [`editSubAccountApiKey`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AeditSubAccountApiKey&type=code), [`deleteSubAccountApiKey`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AdeleteSubAccountApiKey&type=code)
- **Fees**: [`getAccountTradeFees`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAccountTradeFees&type=code)
- **Settings**: [`getFuturesMarketSettings`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetFuturesMarketSettings&type=code), [`modifyAccountSettings`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AmodifyAccountSettings&type=code), [`modifyFuturesMarketSettings`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AmodifyFuturesMarketSettings&type=code)
- [`getAccountInfo()`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAccountInfo&type=code): Get main account information.

### Assets (`client.assets`)

- **AMM**: [`addAMMLiquidity`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AaddAMMLiquidity&type=code), [`getAMMIncomeHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAMMIncomeHistory&type=code), [`getAMMLiquidityPool`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAMMLiquidityPool&type=code), [`removeAMMLiquidity`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AremoveAMMLiquidity&type=code)
- **Balance**: [`getAMMLiquidity`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAMMLiquidity&type=code), [`getCreditBalance`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetCreditBalance&type=code), [`getCreditInfo`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetCreditInfo&type=code), [`getFinancialBalance`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetFinancialBalance&type=code), [`getFuturesBalance`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetFuturesBalance&type=code), [`getMarginBalance`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetMarginBalance&type=code), [`getSpotBalance`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSpotBalance&type=code), [`getSpotTransactionHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetSpotTransactionHistory&type=code)
- **Borrow & Repay**: [`getMarginBorrowHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetMarginBorrowHistory&type=code), [`getMarginInterestLimit`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetMarginInterestLimit&type=code), [`marginBorrow`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AmarginBorrow&type=code), [`marginRepay`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AmarginRepay&type=code)
- **Deposit & Withdrawal**: [`cancelWithdrawal`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelWithdrawal&type=code), [`getDepositAddress`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetDepositAddress&type=code), [`getDepositWithdrawalConfig`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetDepositWithdrawalConfig&type=code), [`getAllDepositWithdrawalConfig`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAllDepositWithdrawalConfig&type=code), [`getAssetInfo`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAssetInfo&type=code), [`getDepositHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetDepositHistory&type=code), [`getWithdrawalHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetWithdrawalHistory&type=code), [`updateDepositAddress`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AupdateDepositAddress&type=code), [`withdrawal`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3Awithdrawal&type=code)
- **Transfer**: [`getAssetTransferHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetAssetTransferHistory&type=code), [`transfer`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3Atransfer&type=code)

### Spot (`client.spot`)

- **Market**: [`listMarket`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarket&type=code), [`listMarketTicker`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketTicker&type=code), [`listMarketDepth`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketDepth&type=code), [`listMarketKline`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketKline&type=code), [`listMarketDeals`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketDeals&type=code), [`listMarketIndex`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketIndex&type=code)
- **Order**: [`putOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputOrder&type=code), [`putStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputStopOrder&type=code), [`getOrderStatus`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetOrderStatus&type=code), [`getMultiOrderStatus`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetMultiOrderStatus&type=code), [`listPendingOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPendingOrder&type=code), [`listFinishedOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistFinishedOrder&type=code), [`listPendingStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPendingStopOrder&type=code), [`listFinishedStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistFinishedStopOrder&type=code), [`editOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AeditOrder&type=code), [`editStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AeditStopOrder&type=code), [`cancelOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelOrder&type=code), [`cancelOrderByClientId`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelOrderByClientId&type=code), [`cancelStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelStopOrder&type=code), [`cancelStopOrderByClientId`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelStopOrderByClientId&type=code), [`cancelAllOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelAllOrder&type=code), [`cancelBatchOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelBatchOrder&type=code), [`cancelBatchStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelBatchStopOrder&type=code), [`putMultiOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputMultiOrder&type=code), [`putMultiStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputMultiStopOrder&type=code)
- **Deal**: [`listUserDeals`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistUserDeals&type=code), [`listUserOrderDeals`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistUserOrderDeals&type=code)

### Futures (`client.futures`)

- **Market**: [`listMarketBasisHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketBasisHistory&type=code), [`listMarketDeals`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketDeals&type=code), [`listMarketDepth`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketDepth&type=code), [`listMarketFundingRateHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketFundingRateHistory&type=code), [`listMarketFundingRate`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketFundingRate&type=code), [`listMarketIndex`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketIndex&type=code), [`listMarketKline`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketKline&type=code), [`listMarketLiquidationHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketLiquidationHistory&type=code), [`listMarketPositionLevel`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketPositionLevel&type=code), [`listMarketPremiumHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketPremiumHistory&type=code), [`listMarketTicker`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarketTicker&type=code), [`listMarket`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistMarket&type=code)
- **Order**: [`putOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputOrder&type=code), [`putStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputStopOrder&type=code), [`getOrderStatus`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetOrderStatus&type=code), [`getMultiOrderStatus`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetMultiOrderStatus&type=code), [`listPendingOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPendingOrder&type=code), [`listFinishedOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistFinishedOrder&type=code), [`listPendingStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPendingStopOrder&type=code), [`listFinishedStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistFinishedStopOrder&type=code), [`editOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AeditOrder&type=code), [`editStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AeditStopOrder&type=code), [`cancelOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelOrder&type=code), [`cancelOrderByClientId`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelOrderByClientId&type=code), [`cancelStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelStopOrder&type=code), [`cancelStopOrderByClientId`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelStopOrderByClientId&type=code), [`cancelAllOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelAllOrder&type=code), [`cancelBatchOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelBatchOrder&type=code), [`cancelBatchStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AcancelBatchStopOrder&type=code), [`putMultiOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputMultiOrder&type=code), [`putMultiStopOrder`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AputMultiStopOrder&type=code)
- **Position**: [`adjustPositionLeverage`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AadjustPositionLeverage&type=code), [`adjustPositionMargin`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AadjustPositionMargin&type=code), [`closePosition`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AclosePosition&type=code), [`listFinishedPosition`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistFinishedPosition&type=code), [`listPendingPosition`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPendingPosition&type=code), [`listPositionAdlHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPositionAdlHistory&type=code), [`listPositionFundingHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPositionFundingHistory&type=code), [`listPositionMarginHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPositionMarginHistory&type=code), [`listPositionSettleHistory`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistPositionSettleHistory&type=code), [`setPositionStopLoss`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AsetPositionStopLoss&type=code), [`setPositionTakeProfit`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AsetPositionTakeProfit&type=code)
- **Deal**: [`listUserDeals`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistUserDeals&type=code), [`listUserOrderDeals`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AlistUserOrderDeals&type=code)

### Maintain (`client.maintain`)

- [`getMaintenanceInfo()`](https://github.com/search?q=repo%3Ashahradelahi%2Fcoinex+symbol%3AgetMaintenanceInfo&type=code): Get system maintenance information.

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/coinex/graphs/contributors).
