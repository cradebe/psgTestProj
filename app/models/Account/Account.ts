import {uuid} from '../../util/uuid';
import {AccountCurrency} from '../../models/AccountCurrency/AccountCurrency';

export class Account {
  private _id:string;
  private _currencies:AccountCurrency[];

  constructor(currencies:AccountCurrency[] = []) {
    this._id = uuid();
    this._currencies = currencies;
  }

  get currencies():AccountCurrency[] {
    return this._currencies;
  }
}