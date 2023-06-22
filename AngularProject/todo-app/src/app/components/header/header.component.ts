import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private aService: AuthService) { }
  ngOnInit(): void {
    console.log("header",this.aService.isLoggedIn );
    
  }

 isLoggedIn:boolean=this.aService.isLoggedIn;

 fullName:string=JSON.parse(localStorage.getItem("users")|| "").firstName;

    handleLogout(){ 
      localStorage.clear();
      this.aService.isLoggedIn = false;
      console.log("handle logout",this.aService.isLoggedIn);
    }
    handleLogin(){
      console.log("handle login");
      
      this.router.navigate(['/login']);
    }

}
