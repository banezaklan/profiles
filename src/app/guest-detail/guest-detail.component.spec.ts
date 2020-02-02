import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { GuestDetailComponent } from './guest-detail.component';
import { GuestsComponent } from '../guests/guests.component';

import { MaterialDesignModule } from '../../material-design/material-design.module';
import { MomentModule } from 'ngx-moment';
import { QuickFactsComponent } from '../quick-facts/quick-facts.component';
import { ProfileDetailsFormComponent } from '../profile-details-form/profile-details-form.component';
import { MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {Guest} from '../guest';
import {Router} from '@angular/router';

describe('GuestDetailComponent', () => {
  let component: GuestDetailComponent;
  let fixture: ComponentFixture<GuestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        QuickFactsComponent,
        ProfileDetailsFormComponent,
        GuestsComponent,
        GuestDetailComponent
      ],
      imports: [
        HttpClientModule,
        MaterialDesignModule,
        MomentModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes(
          [{path: 'guests/:id', component: GuestDetailComponent}]
        ),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load selected profile', async () => {
    // Couldn't get the test setup to pass the url param ID to the component. It would probably take me quite some time to set this all up.
    // Also, I would have to mock the service.
    // It would probably take me some more time to figure it out and set it up properly.
  // });

});
