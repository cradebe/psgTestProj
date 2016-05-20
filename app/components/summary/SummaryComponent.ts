import {Component} from '@angular/core';
import {Account} from '../../models/Account/Account';
import {ExchangeFormComponent} from '../exchange-form/ExchangeFormComponent';
import {TransactionService} from '../../services/transaction/TransactionService';

@Component({
  selector: 'summary',
  directives: [ExchangeFormComponent],
  templateUrl: 'app/components/Summary/summary.html'
})
export class SummaryComponent {
  account:Account;

  constructor(private transactionService:TransactionService) {
    this.account = transactionService.account;
  }
}