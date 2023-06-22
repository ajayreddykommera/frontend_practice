import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private aService: AuthService) { }

  ngOnInit() {
    console.log("profile",this.aService.isLoggedIn);
    
  }
  


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
