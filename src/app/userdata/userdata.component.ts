import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  NewUser = {
    'Id': Number,
    'Name': '',
    'Email': '',
    'Address': '',
    'Phone': ''
  };

  constructor(private apiservice: APIService) { }

  ngOnInit() {
  }

  AddUser() {
    this.NewUser['Id'] = this.apiservice.UserList[this.apiservice.UserList.length - 1]['Id'] + 1;
    this.apiservice.UserList.push(this.NewUser);
  }
}