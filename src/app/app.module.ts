import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryGuestService } from './in-memory-guest.service';
import { GuestsComponent } from './guests/guests.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MomentModule } from 'ngx-moment';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';
import { QuickFactsComponent } from './quick-facts/quick-facts.component';
import { ProfileDetailsFormComponent } from './profile-details-form/profile-details-form.component';
import { MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
    GuestDetailComponent,
    QuickFactsComponent,
    ProfileDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryGuestService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule,
    MaterialDesignModule,
    MomentModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
