import { TestBed } from '@angular/core/testing';
import { Guest } from './guest';
import { GuestsService } from './guests.service';

fdescribe('GuestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestsService = TestBed.get(GuestsService);
    expect(service).toBeTruthy();
  });
});
