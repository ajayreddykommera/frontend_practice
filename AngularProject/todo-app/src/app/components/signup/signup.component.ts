import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ISignupForm {
  firstName:string,
  lastName:string,
  dob:string,
  email:string,
  phone:string,
  password:string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
 
})
export class SignupComponent {
  
   

signupForm:ISignupForm={
  firstName:"",
  lastName:"",
  dob:"",
  email:"",
  phone:"",
  password:"",
}
constructor(private router: Router) { }

signup(){
 console.log(JSON.stringify(this.signupForm));
 localStorage.setItem("users", JSON.stringify(this.signupForm));
 this.router.navigate(['/login']);
}

}


