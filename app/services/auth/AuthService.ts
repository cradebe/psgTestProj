import {Injectable, provide} from '@angular/core';

@Injectable()
export class AuthService {
  login(user:string, password:string):boolean {
    if (user === 'username' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout():any {
    localStorage.removeItem('username');
  }

  getUser():any {
    return localStorage.getItem('username');
  }

  isAuthorized():boolean {
    return this.getUser() !== null;
  }
}

export var AUTH_PROVIDERS:Array<any> = [
  provide(AuthService, {useClass: AuthService})
];