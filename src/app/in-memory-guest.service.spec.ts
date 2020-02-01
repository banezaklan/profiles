import { TestBed } from '@angular/core/testing';

import { InMemoryGuestService } from './in-memory-guest.service';

describe('InMemoryGuestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryGuestService = TestBed.get(InMemoryGuestService);
    expect(service).toBeTruthy();
  });
});
