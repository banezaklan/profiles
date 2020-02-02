import { Injectable } from '@angular/core';
import { Guest} from './guest';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { zip } from 'rxjs';
import { SearchParams } from './search-params';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  guestsUrl = 'api/guests';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) {
  }
  getGuest(id: number): Observable<Guest> {
    const url = `${this.guestsUrl}/${id}`;
    console.log('getGuest', url);
    // return this.http.get<Guest>(url).pipe(
    //   catchError(this.handleError<Guest>(`getGuest id=${id}`))
    // );
    return this.http.get<Guest[]>(this.guestsUrl)
      .pipe(
        map(recs => {
          return recs.find(rec => {
            return rec.localid === id;
          });
        }),
      );
  }
  searchGuests(searchParams: SearchParams): Observable<Guest[]> {

    const reqs = [];
    console.log('guests.service searchGuests', searchParams);
    if (typeof searchParams.term !== 'undefined' && searchParams.term !== '') {
      reqs.push(this.http.get<Guest[]>(`${this.guestsUrl}/?first_name=${searchParams.term}`));
      reqs.push(this.http.get<Guest[]>(`${this.guestsUrl}/?last_name=${searchParams.term}`));
      reqs.push(this.http.get<Guest[]>(`${this.guestsUrl}/?email=${searchParams.term}`));
    } else {
      reqs.push(this.http.get<Guest[]>(`${this.guestsUrl}`));
    }

    return zip<Guest[]>(...reqs).pipe(
      map(results => {
        // console.log('results', results);
        let finalResult = [];
        results.forEach(result => {
          finalResult = finalResult.concat(result);
        });
        const distinct = [];
        const tempMap = new Map();
        for (const item of finalResult) {
          if (!tempMap.has(item.localid)) {
            tempMap.set(item.localid, true);    // set any value to Map
            distinct.push(item);
          }
        }
        // console.log('searchGuests searchParams.sortSetup', searchParams.sortSetup);
        if (typeof  searchParams.sortSetup !== 'undefined' && searchParams.sortSetup.direction !== '') {
          distinct.sort(this.compareValues(searchParams.sortSetup.active, searchParams.sortSetup.direction));
          console.log(distinct);
        }
        return distinct;
      })
    );

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private compareValues(key: string, order: string = 'asc'): any {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        if (key === 'name') {
          a[key] = a.first_name + ' ' + a.last_name;
          b[key] = b.first_name + ' ' + b.last_name;
        } else {
          // property doesn't exist on either object
          return 0;
        }
      }
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
