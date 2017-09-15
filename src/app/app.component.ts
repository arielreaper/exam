import { Component } from '@angular/core';

import { MyDataService } from "./my-data.service"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name: string = "Name";
  Email: string = "Email";
  Address: string = "Address";
  Phone: string = "Phone";
  CompanyName: string = "companyname";
  AddUser: object[] = [];


  constructor(private data: MyDataService){

  }

}