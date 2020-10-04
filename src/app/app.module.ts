import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNnT9AroiDMBSTfiEYufsShV7nY5NhAYI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
