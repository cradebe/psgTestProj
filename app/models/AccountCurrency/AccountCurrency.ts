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

  get value():string {
    return `${this._amount} ${this._currency}`;
  }
}