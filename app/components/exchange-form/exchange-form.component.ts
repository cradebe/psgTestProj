import {Component, Inject, OnInit} from '@angular/core';
import {Control, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from '@angular/common';
import {TransactionService} from '../../services/transaction/transaction.service';

@Component({
  selector: 'exchange-form',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'app/components/exchange-form/exchange-form.html'
})
export class ExchangeFormComponent implements OnInit {
  form:ControlGroup;
  alert:string;

  constructor(
    fb:FormBuilder,
    @Inject('CURRENCIES') public currencies:string[],
    private transactionService:TransactionService
  ) {
    this.form = fb.group({
      amount: [0, Validators.required],
      result: 0,
      source: 'EUR',
      target: 'PLN'
    });
  }

  ngOnInit():void {
    this.form.controls['amount'].valueChanges
      .filter((value:number) => value > 1)
      .debounceTime(250)
      .subscribe(() => this.exchange());

    this.form.controls['result'].valueChanges
      .filter((value:number) => value > 1)
      .debounceTime(250)
      .subscribe(() => this.exchange('target'));

    this.form.controls['source'].valueChanges
      .filter((x) => x !== this.form.controls['target'].value)
      .subscribe(() => this.exchange());

    this.form.controls['target'].valueChanges
      .filter((x) => x !== this.form.controls['source'].value)
      .subscribe(() => this.exchange('target'));
  }

  exchange(dir:string = 'source'):void {
    const {amount, result, source, target} = this.form.controls;

    this.transactionService.exchange(amount.value, source.value, target.value)
      .subscribe((response) => {
        if ('source' === dir) {
          (result as Control).updateValue(response, {emitEvent: false});
        } else if('target' === dir) {
          (amount as Control).updateValue(response, {emitEvent: false});
        }
      });
  }

  onSubmit(form:any) {
    if (!this.transactionService.account.hasEnoughMoney(form.controls['amount'].value, form.controls['source'].value)) {
      this.alert = 'Nie posiadasz wystarczających środków';
    }

    this.transactionService.create(
      form.controls['amount'].value,
      form.controls['source'].value,
      form.controls['result'].value,
      form.controls['target'].value
    );
  }
}