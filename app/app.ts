import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, ComponentRef, Injector} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {ExchangeComponent} from './components/exchange/ExchangeComponent';
import {LoginComponent} from './components/login/LoginComponent';

import {AUTH_PROVIDERS} from './services/auth/AuthService';
import {AppInjector} from "./services/injector/AppInjector";

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
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS
]).then((appRef: ComponentRef<Injector>) => {
  // store a reference to the application injector
  AppInjector(appRef.injector);
});