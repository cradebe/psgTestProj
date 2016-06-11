import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'login',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'app/components/login/login.html'
})
export class LoginComponent {
  message:string;

  constructor(public authService:AuthService, private router: Router) {
    this.message = '';
  }

  onSubmit(username:string, password:string):boolean {
    if (!this.authService.login(username, password)) {
      this.message = 'Nieprawidłowe dane';

      return false;
    }

    this.router.navigate(['/Exchange']);
    return true;
  }
}