import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService1 } from 'src/app/auth/auth.service';
import { AuthService } from 'src/app/services/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm: FormGroup;
  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _coreService: CoreService,
    private _aauthservice:AuthService1
  ) {
    this.userForm = this._fb.group({
      email: '',
      pwd: '',
    });
  }

  onFormSubmit() {
    if (this.userForm.valid ) {
      
      console.log(this.userForm.value)
      this._authService.getUserById(this.userForm.value.email,this.userForm.value.pwd).subscribe({
        next: (val: any) => {
          this._aauthservice.isLoggedIn.next(true);
          console.log(this._aauthservice.isLoggedIn.value,val)
          this.router.navigate(['/submissions']);
          val.length ? this._coreService.openSnackBar('Login Successful !'): this._coreService.openSnackBar('Login UnSuccessful !');
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
    else{
      this._coreService.openSnackBar('Invalid User Details. Please Try Again')
      this.router.navigate(['/login']);
    }
  }

}
