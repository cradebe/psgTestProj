import {Component} from '@angular/core';
import {Transaction} from '../../models/Transaction/Transaction';
import {TransactionComponent} from '../transaction/TransactionComponent';
import {TransactionService} from '../../services/transaction/TransactionService';

@Component({
  selector: 'history',
  directives: [TransactionComponent],
  templateUrl: 'app/components/history/history.html'
})
export class HistoryComponent {
  list:Transaction[];

  constructor(private transactionService:TransactionService) {
    this.list = transactionService.account.transactions;
  }
}