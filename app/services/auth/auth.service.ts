import {Injectable, provide} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/**
 *
 * 5. SERWISY
 *
 *    - @Injectable()
 *
 * 7. DEPENDENCY INJECTION
 *
 *    - useClass
 *
 */

@Injectable()
export class AuthService {
  authorized:boolean;

  constructor() {
    this.authorized = false;
  }

  login(user:string, password:string):boolean {
    if (user === 'username' && password === 'password') {
      this.authorized = true;
      return true;
    }

    return false;
  }

  logout():any {
    this.authorized = false;
  }

  isAuthorized():Observable<boolean> {
    //noinspection TypeScriptUnresolvedFunction
    return Observable.of(this.authorized);
  }
}

export var AUTH_PROVIDERS:Array<any> = [
  provide(AuthService, {useClass: AuthService})
];