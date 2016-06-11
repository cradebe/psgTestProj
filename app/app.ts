import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, ComponentRef, Injector} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {ExchangeComponent} from './components/exchange/exchange.component';
import {LoginComponent} from './components/login/login.component';

import {AppInjector} from "./services/injector/app.injector";
import {CONFIG} from './config/config';
import {AUTH_PROVIDERS} from './services/auth/auth.service';
import {TRANSACTION_PROVIDERS} from './services/transaction/transaction.service';

import 'rxjs/Rx';

/**
 *
 * 1. BUDOWA APLIKACJI
 *
 *    - Component
 *    - bootstrap
 *
 * 2. ROUTER
 *
 * 7. DEPENDENCY INJECTION
 *
 *    - providery w Compnentach
 *    - providery w bootstrap
 *
 */

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    path: '/',
    name: 'root',
    redirectTo: ['Exchange']
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/exchange/...',
    name: 'Exchange',
    component: ExchangeComponent
  }
])
class AppComponent {}

bootstrap(AppComponent, [
  CONFIG,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  TRANSACTION_PROVIDERS
]).then((appRef: ComponentRef<Injector>) => {
  // store a reference to the application injector
  AppInjector(appRef.injector);
});