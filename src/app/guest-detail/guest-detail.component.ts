import {Component, Input, OnInit} from '@angular/core';
import { Guest } from '../guest';
import { Router, ActivatedRoute } from '@angular/router';
import { GuestsService } from '../guests.service';
import { ViewEncapsulation} from '@angular/core';
// import { QuickFactsComponent } from '../quick-facts/quick-facts.component';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuestDetailComponent implements OnInit {
  @Input() guest: Guest;
  private  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private guestService: GuestsService,
  ) {
    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log('id', this.id);
      this.guestService.getGuest(this.id).subscribe(res => {
        this.guest = res;
      } );
    });
  }

  ngOnInit() {
  }

}
