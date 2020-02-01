import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Guest } from './guest';
import { GUESTS } from './mock-guests';


@Injectable({
  providedIn: 'root'
})
export class InMemoryGuestService implements InMemoryDbService {
  createDb() {
    return {guests: GUESTS};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(recs: Guest[]): number {
    return recs.length > 0 ? Math.max(...recs.map(rec => rec.localid)) + 1 : 1;
  }
  constructor() { }
}
