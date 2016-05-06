import {Component} from '@angular/core';
import {Transaction} from '../../models/Transaction/Transaction';
import {TransactionComponent} from '../transaction/TransactionComponent';
import * as moment from 'moment';

@Component({
  selector: 'history',
  directives: [TransactionComponent],
  templateUrl: 'app/components/history/history.html'
})
export class HistoryComponent {
  list:Transaction[] = [
    new Transaction('EUR', 'USD', 100, 1.1427, moment().toDate()),
    new Transaction('EUR', 'PLN', 300, 4.4198, moment().toDate())
  ];
}