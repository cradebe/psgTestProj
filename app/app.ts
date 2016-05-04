import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {LoginComponent} from './components/login/LoginComponent';

import {AUTH_PROVIDERS} from './services/auth/AuthService';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
])
class AppComponent {}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS
]);