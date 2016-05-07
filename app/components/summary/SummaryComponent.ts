import {Component} from '@angular/core';
import {Account} from '../../models/Account/Account';
import {AccountCurrency} from '../../models/AccountCurrency/AccountCurrency';

@Component({
  selector: 'summary',
  templateUrl: 'app/components/Summary/summary.html'
})
export class SummaryComponent {
  account:Account = new Account(
    [
      new AccountCurrency({
        amount: 1000,
        currency: 'EUR'
      }),
      new AccountCurrency({
        amount: 500,
        currency: 'USD'
      }),
      new AccountCurrency({
        amount: 1200
      })
    ]
  )
}