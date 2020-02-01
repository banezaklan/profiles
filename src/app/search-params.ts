import {Sort} from '@angular/material';

export class SearchParams {
  term: string;
  pageNumber: number;
  pageSize: number;
  sortSetup: Sort;
}
