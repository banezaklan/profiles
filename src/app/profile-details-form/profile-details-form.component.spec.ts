import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsFormComponent } from './profile-details-form.component';

describe('ProfileDetailsFormComponent', () => {
  let component: ProfileDetailsFormComponent;
  let fixture: ComponentFixture<ProfileDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
