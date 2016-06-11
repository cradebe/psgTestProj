import {Component} from '@angular/core';
import {Account} from '../../models/account/account.model';
import {ExchangeFormComponent} from '../exchange-form/exchange-form.component';
import {TransactionService} from '../../services/transaction/transaction.service';
import {NumberPipe} from '../../pipes/number/number.pipe';

@Component({
  selector: 'summary',
  directives: [ExchangeFormComponent],
  pipes: [NumberPipe],
  templateUrl: 'app/components/Summary/summary.html'
})
export class SummaryComponent {
  account:Account;

  constructor(private transactionService:TransactionService) {
    this.account = transactionService.account;
  }
}