import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private authService: AuthService) {}
  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn;
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
}

