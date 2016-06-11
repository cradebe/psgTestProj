import {Component, Input} from '@angular/core';
import {Transaction} from '../../models/transaction/transaction.model';
import {FromNowPipe} from '../../pipes/from-now/from-now.pipe';

/**
 *
 * 3. Wbudowane dyrektywy
 *
 *    - @Input
 *
 * 4. Filtry
 *
 *    - parametr pipes
 *    - korzstanie
 *
 */

@Component({
  selector: 'transaction',
  pipes: [FromNowPipe],
  template: `
    {{transaction.date | fromNow}}
    <div class="panel panel-default text-right">
      <div class="panel-heading">
        {{transaction.amount}} {{transaction.source}}
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6">
            1 {{transaction.source}}
          </div>
          <div class="col-xs-6">
            {{transaction.rate}} {{transaction.target}}
          </div>
        </div>
      </div>
      <div class="panel-footer">
        {{transaction.result()}} {{transaction.target}}
      </div>
    </div>
  `
})
export class TransactionComponent {
  @Input()
  transaction:Transaction;
}