import {Component} from '@angular/core';
import {Transaction} from '../../models/transaction/transaction.model';
import {TransactionComponent} from '../transaction/transaction.component';
import {TransactionService} from '../../services/transaction/transaction.service';

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