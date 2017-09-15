import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private apiservice: APIService) { }

  ngOnInit() {
  }

  RemoveUser(id) {
    for (var i = 0; i < this.apiservice.UserList.length; i++) {
      if (id == this.apiservice.UserList[i]['Id']) {
        this.apiservice.UserList.splice(i, 1);
      }
    }
  }
}