import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from 'src/app/auth/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {
  constructor(
    private router: Router,
    private _coreService: CoreService,
    private _aauthservice: AuthService1
  ) {}
  onLogout() {

    this._aauthservice.setItem('isLogged', false);
    console.log(this._aauthservice.removeItem)
    this.router.navigate(['/login']);
    this._coreService.openSnackBar('Logout Successful !')
  }
}
