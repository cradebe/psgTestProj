import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, ComponentRef, Injector} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {ExchangeComponent} from './components/exchange/ExchangeComponent';
import {LoginComponent} from './components/login/LoginComponent';

import {AppInjector} from "./services/injector/AppInjector";
import {CONFIG} from './config/config';
import {AUTH_PROVIDERS} from './services/auth/AuthService';
import {TRANSACTION_PROVIDERS} from './services/transaction/TransactionService';

import 'rxjs/Rx';

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