import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  email: string = '';
  password: string = '';
  message: string = '';

  login() {
    const users: any = localStorage.getItem('users');
    // console.log(JSON.parse(users));
    if (
      this.email == JSON.parse(users).email &&
      this.password == JSON.parse(users).password
    ) {
      this.router.navigate(['/profile']);
    } else {
      console.log("came to else block")
      this.message = 'Try again';
    }
  }
}
