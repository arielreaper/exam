import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdataComponent } from './userdata/userdata.component';

import { APIService } from './api.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component: UserlistComponent },
      { path : 'userdata', component: UserdataComponent }
    ])
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }