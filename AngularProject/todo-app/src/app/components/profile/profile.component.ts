import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  allUsers: any = localStorage.getItem('users');
  users=JSON.parse(this.allUsers);
  signupForm ={
    firstName:this.users.firstName,
    lastName:this.users.lastName,
    dob:this.users.dob,
    email:this.users.email,
    phone:this.users.phone,
  
  }
  

}
