import {uuid} from '../../util/uuid';
import * as moment from 'moment';

export class Transaction {
  private _id:string;
  private _source:string;
  private _target:string;
  private _amount:number;
  private _rate:number;
  private _date:Date;

  constructor(source:string, target:string, amount:number, rate:number, date:Date) {
    this._id = uuid();
    
    this._source = source;
    this._target = target;
    this._amount = amount;
    this._rate = rate;
    this._date = date;
  }

  get source():string {
    return this._source;
  }

  get amount():string {
    return `${this._amount} ${this._source}`;
  }

  get rate():string {
    return `${this._rate} ${this._target}`;
  }

  get result():string {
    return `${(this._amount * this._rate).toFixed(2)} ${this._target}`;
  }

  get date():Date {
    return moment(this._date).fromNow();
  }
}