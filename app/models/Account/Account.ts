import {uuid} from '../../util/uuid';
import {AccountCurrency} from '../../models/AccountCurrency/AccountCurrency';
import {Transaction} from '../../models/Transaction/Transaction';

export class Account {
  private _id:string;
  private _currencies:AccountCurrency[];
  private _transactions:Transaction[];

  constructor(currencies:AccountCurrency[] = [], transactions?:Transaction[]) {
    this._id = uuid();
    this._currencies = currencies;
    this._transactions = transactions || [];
  }

  get currencies():AccountCurrency[] {
    return this._currencies;
  }

  get transactions():Transaction[] {
    return this._transactions;
  }

  addCurrency(accountCurrency:AccountCurrency):AccountCurrency {
    this._currencies.push(accountCurrency);

    return this._currencies[this._currencies.length - 1];
  }

  addTransaction(transaction:Transaction):void {
    this._transactions.push(transaction);
  }

  hasEnoughMoney(amount:number,currency:string):boolean {
    const res:AccountCurrency = this._currencies.find(x => x.currency === currency);

    if (!res) {
      return false;
    }

    return this._currencies.find(x => x.currency === currency).amount >= amount;
  }
}