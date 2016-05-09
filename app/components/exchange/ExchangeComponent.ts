import {Component, Injector} from '@angular/core';
import {CanActivate, OnActivate, ComponentInstruction, RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AppInjector} from '../../services/injector/AppInjector';
import {AuthService} from '../../services/auth/AuthService';
import {TransactionService} from '../../services/transaction/TransactionService';
import {HistoryComponent} from '../history/HistoryComponent';
import {SummaryComponent} from '../summary/SummaryComponent';

@Component({
  selector: 'exchange',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/exchange/exchange.html'
})
@CanActivate(
  (next:ComponentInstruction, prev:ComponentInstruction) => {
    let injector:Injector = AppInjector();
    let authService:AuthService = injector.get(AuthService);
    let router:Router = injector.get(Router);

    return new Promise((resolve) => {
      authService.isAuthorized()
        .subscribe((result) => {
          if (result) {
            resolve(true);
          } else {
            router.navigate(['/Login']);
            resolve(false);
          }
        });
    });
  }
)
@RouteConfig([
  {
    path: '/summary',
    name: 'Summary',
    component: SummaryComponent,
    useAsDefault: true
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryComponent
  }
])
export class ExchangeComponent implements OnActivate {
  constructor(public router:Router, public transactionService:TransactionService) {

  }

  routerOnActivate() {
    return new Promise((resolve) => {
      this.transactionService.getRates()
        .subscribe(() => {
          resolve(true);
        });
    });
  }
}