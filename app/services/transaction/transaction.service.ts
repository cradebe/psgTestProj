import {Inject, Injectable, provide} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Account} from '../../models/account/account.model';
import {AccountCurrency} from '../../models/account-currency/account-currency.model';
import {Transaction} from '../../models/transaction/transaction.model';
import * as moment from 'moment';

@Injectable()
export class TransactionService {
  account:Account;
  rates:Object = {};

  constructor(public http:Http, @Inject('API_URL') private apiUrl:string) {
    this.account = new Account(
      [
        new AccountCurrency({
          amount: 1000,
          currency: 'EUR'
        })
      ]
    )
  }

  getRates(base = 'EUR') {
    return this.http.get(this.apiUrl + `/latest?base=${base}`)
      .map((response:Response) => {
        this.rates[base] = response.json().rates;

        return response.json().rates;
      })
  }

  exchange(amount:number, source:string, target:string) {
    if (this.rates[source]) {
      //noinspection TypeScriptUnresolvedFunction
      return Observable.of((amount * this.rates[source][target]).toFixed(2));
    }

    return this.getRates(source).map((response) => {
      return (amount * response[target]).toFixed(2);
    });
  }

  create(amount:number, source:string, result:number, target:string) {
    this.account.addTransaction(
      new Transaction(source, target, amount, this.rates[source][target], moment().toDate())
    );

    let sourceCurrency:AccountCurrency = this.account.currencies.find(x => x.currency === source);
    let targetCurrency:AccountCurrency = this.account.currencies.find(x => x.currency === target);
    
    if (!targetCurrency) {
      targetCurrency = this.account.addCurrency(new AccountCurrency({currency: target}));
    }

    sourceCurrency.amount -= Number(amount);
    targetCurrency.amount += Number(result);
  }
}

export var TRANSACTION_PROVIDERS:Array<any> = [
  provide(TransactionService, {useClass: TransactionService})
];