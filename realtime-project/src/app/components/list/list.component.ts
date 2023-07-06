import { Component } from '@angular/core';
declare var window: any;
interface Submission {
  name: String;
  email: String;
  phone: String;
  date: String;
  client: String;
  vendor: String;
  implementation: String;
  submitted: Boolean;
}
interface Submissions extends Array<Submission>{}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
   list: Submissions = [
    {
      name: "ajay",
      email: "String",
      phone: "String",
      date: "String",
      client: "String",
      vendor: "String",
      implementation: "String",
      submitted: true,
    },
    {
      name: "vijay",
      email: "String",
      phone: "String",
      date: "String",
      client: "String",
      vendor: "String",
      implementation: "String",
      submitted: true,
    },
  ];

  formModal: any;
  constructor() {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }
}
