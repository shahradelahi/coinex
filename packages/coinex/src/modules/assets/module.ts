import { type CoinExClient } from '@/client';

import { Amm } from './amm';
import { Balance } from './balance';
import { BorrowRepay } from './borrow-repay';
import { DepositWithdrawal } from './deposit-withdrawal';
import { Transfer } from './transfer';

export class Assets {
  public readonly amm: Amm;
  public readonly balance: Balance;
  public readonly borrowRepay: BorrowRepay;
  public readonly depositWithdrawal: DepositWithdrawal;
  public readonly transfer: Transfer;

  constructor(client: CoinExClient) {
    this.amm = new Amm(client);
    this.balance = new Balance(client);
    this.borrowRepay = new BorrowRepay(client);
    this.depositWithdrawal = new DepositWithdrawal(client);
    this.transfer = new Transfer(client);
  }
}
