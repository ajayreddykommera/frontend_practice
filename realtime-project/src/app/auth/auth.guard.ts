import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService1 } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private authService: AuthService1) {}
  canActivate() {
    const isLoggedIn = this.authService.getItem;
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
}
