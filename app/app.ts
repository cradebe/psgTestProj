import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

import {AUTH_PROVIDERS} from './services/auth/AuthService';

@Component({
  selector: 'app',
  template: ''
})
class AppComponent {}

bootstrap(AppComponent, [
  AUTH_PROVIDERS
]);