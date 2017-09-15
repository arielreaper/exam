import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { MyDataService } from "./my-data.service";
import { UserdataComponent } from './userdata/userdata.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path: "", component: UserdataComponent},
      {path: "Userlist", component: UserlistComponent},
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
