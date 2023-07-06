import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService1 {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  //   login(user: User) {
  //     if (user.userName !== '' && user.password !== '' ) {
  //       this.loggedIn.next(true);
  //       this.router.navigate(['/']);
  //     }
  //   }

  //   logout() {
  //     this.loggedIn.next(false);
  //     this.router.navigate(['/login']);
  //   }
}
