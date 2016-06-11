import {AccountCurrency} from '../account-currency/account-currency.model';
import {Transaction} from '../transaction/transaction.model';

export class Account {
  currencies:AccountCurrency[];
  transactions:Transaction[];

  constructor(currencies:AccountCurrency[] = [], transactions?:Transaction[]) {
    this.currencies = currencies;
    this.transactions = transactions || [];
  }

  addCurrency(accountCurrency:AccountCurrency):AccountCurrency {
    this.currencies.push(accountCurrency);

    return this.currencies[this.currencies.length - 1];
  }

  addTransaction(transaction:Transaction):void {
    this.transactions.push(transaction);
  }

  hasEnoughMoney(amount:number,currency:string):boolean {
    const res:AccountCurrency = this.currencies.find(x => x.currency === currency);

    if (!res) {
      return false;
    }

    return this.currencies.find(x => x.currency === currency).amount >= amount;
  }
}