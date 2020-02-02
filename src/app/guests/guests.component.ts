import {Component, OnInit, ViewChild} from '@angular/core';
import { Guest} from '../guest';
import { GuestsService } from '../guests.service';
import { PageEvent } from '@angular/material/paginator';
import {map, startWith} from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {SearchParams} from '../search-params';
import {MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material/typings/table';
import {Sort} from '@angular/material/typings/sort';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
// tslint:disable-next-line:component-class-suffix

export class GuestsComponent implements OnInit {
  guests$: Observable<Guest[]>;
  private searchTerms = new Subject<SearchParams>();
  displayedColumns: string[] = ['photo', 'localId', 'email', 'name', 'phone', 'address', 'modified', 'view'];
  currentSearchTerm: string;
  // MatPaginator Inputs
  length = 0;
  pageSize = 5;
  pageNumber = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  sortSetup: Sort;
  pageEvent: PageEvent;
  guestsCount: number;

  constructor(
    private guestService: GuestsService,
    private router: Router
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log('search', term);
    this.currentSearchTerm = term;
    this.executeSearch();
  }
  executeSearch() {

    const s = new SearchParams();
    s.term = this.currentSearchTerm;
    s.sortSetup = this.sortSetup;
    console.log('executeSearch', s);
    this.searchTerms.next(s);
  }
  ngOnInit() {
    this.getGuests();
    this.guests$.subscribe(result => {
      this.guestsCount = result.length;
    });
  }
  getGuests(): void {
    const i = new SearchParams();
    i.term = '';
    this.guests$ = this.searchTerms.pipe(
      startWith(i),
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((searchParams: SearchParams) => this.guestService.searchGuests(searchParams)),
      map(res => {
        this.length = res.length ;
        return res.slice(this.pageNumber * this.pageSize, (this.pageNumber + 1) * this.pageSize);
      })
    );
  }

  changePagination(event?: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.executeSearch();
    return event;
  }

  onSortData(sort: Sort) {
    console.log('sort', sort);
    this.sortSetup = sort;
    this.executeSearch();
  }

  getProfile(row: Guest) {
    console.log('getProfile', row);
    const p = `guests/${row.localid}`;
    this.router.navigate([p]);
  }
}
