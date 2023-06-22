import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private aService: AuthService) { }
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
      console.log("enter login",this.aService.isLoggedIn);
      this.aService.isLoggedIn = true;
      this.router.navigate(['/profile']);
      console.log(" after login",this.aService.isLoggedIn);
      
    } else {
      this.aService.isLoggedIn = false;
     alert('InValid details!!!')

    }
  }
}
