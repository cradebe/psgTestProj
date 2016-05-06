import {Component, Input} from '@angular/core';
import {Transaction} from '../../models/Transaction/Transaction';

@Component({
  selector: 'transaction',
  template: `
    {{transaction.date}}
    <div class="panel panel-default text-right">
      <div class="panel-heading">
        {{transaction.amount}}
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6">
            1 {{transaction.source}}
          </div>
          <div class="col-xs-6">
            {{transaction.rate}}
          </div>
        </div>
      </div>
      <div class="panel-footer">
        {{transaction.result}}
      </div>
    </div>
  `,
  styles: [
    `
      
    `
  ]
})
export class TransactionComponent {
  @Input()
  transaction:Transaction;
}