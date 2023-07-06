import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  userForm: FormGroup;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _coreService: CoreService
  ) {
    this.userForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      pwd: '',
    });
  }
  onFormSubmit() {
    if (this.userForm.valid) {
      this._authService.addUser(this.userForm.value).subscribe({
        next: (val: any) => {
          this.router.navigate(['/login']);
          this._coreService.openSnackBar('Signup Success !');
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
