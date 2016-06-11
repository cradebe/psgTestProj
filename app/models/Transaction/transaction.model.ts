export class Transaction {
  source:string;
  target:string;
  amount:number;
  rate:number;
  date:Date;

  constructor(source:string, target:string, amount:number, rate:number, date:Date) {
    this.source = source;
    this.target = target;
    this.amount = amount;
    this.rate = rate;
    this.date = date;
  }

  result():string {
    return (this.amount * this.rate).toFixed(2);
  }
}