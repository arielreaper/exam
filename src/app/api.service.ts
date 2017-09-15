import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ApiService {
  id: number;
  Name: string = "Name";
  Email: string = "Email";
  Address: string = "Address";
  Phone: string = "Phone";
  CompanyName: string = "companyname";

  constructor(private api:ApiService) { }

  ngOnInit(){

  }
  AddUser(name, Email, address, phone, company){
    this.UserList = [];
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result =>{
      
        for(var 1 =0; 1 < result.json().length; i++){
          var user = result json()[i];
          var UserObject ={
           "Name" : user.name,
           "Email" : user.Email,
           "Address" : user.address,
           "Phone" : user.Phone,
           "Company" : user.company,
          };


        }




      // var user = result.json().results[0];
    

    }
    error => { 
      console.log(error);
    }
  )








