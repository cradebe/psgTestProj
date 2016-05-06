import {Component, Injector} from '@angular/core';
import {CanActivate, ComponentInstruction, RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AppInjector} from '../../services/injector/AppInjector';
import {AuthService} from '../../services/auth/AuthService';
import {HistoryComponent} from '../history/HistoryComponent';

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
    path: '/history',
    name: 'History',
    component: HistoryComponent,
    useAsDefault: true
  }
])
export class ExchangeComponent {
  constructor(public router: Router) {}
}