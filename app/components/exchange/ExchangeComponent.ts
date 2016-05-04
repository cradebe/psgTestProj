import {Component, Injector} from '@angular/core';
import {CanActivate, ComponentInstruction, Router} from '@angular/router-deprecated';
import {AppInjector} from '../../services/injector/AppInjector';
import {AuthService} from '../../services/auth/AuthService';

@Component({
  selector: 'exchange',
  template: ''
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
export class ExchangeComponent {

}