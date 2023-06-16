import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  click: boolean = true;

   clickFunction=() => {
    this.click=!this.click;}

}
