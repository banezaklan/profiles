import { Sort } from '@angular/material';
import {HttpClient} from '@angular/common/http';

export class SearchParams {
  constructor() {
    // this.sortSetup =
  }
  term = '';
  sortSetup: Sort;
}
