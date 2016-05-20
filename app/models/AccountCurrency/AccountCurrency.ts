import {uuid} from '../../util/uuid';

export class AccountCurrency {
  private _id:string;
  private _currency:string;
  private _amount:number;

  constructor({id, currency, amount}:any) {
    this._id = id || uuid();
    this._currency = currency || 'PLN';
    this._amount = amount || 0;
  }

  get amount():number {
    return this._amount;
  }

  set amount(value:number) {
    this._amount = value;
  }

  get currency():string {
    return this._currency;
  }

  get value():string {
    return `${this._amount} ${this._currency}`;
  }
}