import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class APIService {
  UserList: Object[] = [];
  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      result => {
        for (var i = 0; i < result.json().length; i++) {
          var user = result.json()[i];
          var UserObj = {
            'Id': user.id,
            'Name': user.name,
            'Email': user.email,
            'Address': user.address.street,
            'Phone': user.phone
          };
          this.UserList.push(UserObj);
        }
      },
      error => { console.log(error); }
    );
  }
}
