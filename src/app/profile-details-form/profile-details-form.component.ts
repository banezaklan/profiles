import { Component, OnInit, Input } from '@angular/core';
import { Guest } from '../guest';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile-details-form',
  templateUrl: './profile-details-form.component.html',
  styleUrls: ['./profile-details-form.component.scss']
})
export class ProfileDetailsFormComponent implements OnInit {
  @Input() guest: Guest;
  panelOpenState = false;
  date = new FormControl(new Date());
  constructor() { }

  ngOnInit() {
    this.date = new FormControl(new Date(this.guest.birthdate));
  }

}
