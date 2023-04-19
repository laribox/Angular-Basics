import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hotel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}
  login() {
    if (this.email == 'test' && this.password == 'test') {
      this.loginService.isLoggedIn = true;
      this.router.navigate(['/rooms']);
    }
  }
}
