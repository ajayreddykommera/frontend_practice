import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from 'src/app/auth/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private _coreService: CoreService,
    private _aauthservice: AuthService1
  ) {}
  onLogout() {

    this._aauthservice.isLoggedIn.next(false);
    console.log(this._aauthservice.isLoggedIn.value)
    this.router.navigate(['/login']);
    this._coreService.openSnackBar('Logout Successful !')
  }
}
