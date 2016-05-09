import {Inject, Injectable, provide} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TransactionService {
  rates:Object = {};

  constructor(public http:Http, @Inject('API_URL') private apiUrl:string) {

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
}

export var TRANSACTION_PROVIDERS:Array<any> = [
  provide(TransactionService, {useClass: TransactionService})
];