export class AccountCurrency {
  currency:string;
  amount:number;

  constructor({currency, amount}:any) {
    this.currency = currency || 'PLN';
    this.amount = amount || 0;
  }
}