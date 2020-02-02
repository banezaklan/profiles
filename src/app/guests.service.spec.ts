import { TestBed } from '@angular/core/testing';
import { Guest } from './guest';
import { GuestsService } from './guests.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryGuestService } from './in-memory-guest.service';

import { SearchParams } from './search-params';
import { GUESTS } from './mock-guests';

fdescribe('GuestsService', () => {
  let httpMock: HttpTestingController;
  let guestService: GuestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryGuestService, {dataEncapsulation: false}
        )
      ],
      providers: [GuestsService]
    });
    guestService = TestBed.get(GuestsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(guestService).toBeTruthy();
  });

  it('should return correct data', async () => {
    const searchParams = new SearchParams();
    const data = await guestService.searchGuests(searchParams).toPromise();
    expect(data).toEqual( GUESTS );
  });

  it('should return correct search result', async () => {
    const searchParams = new SearchParams();
    searchParams.term = 'jele';
    // tslint:disable-next-line:max-line-length
    const mockResult = [{address: '7 Kinsman Alley', birthdate: '9/6/2018', email: 'jheads0@bigcartel.com', email2: 'jheads0@hatena.ne.jp', first_name: 'Jelene', gender: 'Female', last_name: 'Heads', localid: 1, loyalty_member_id: '68-5798732', modified: '2019-01-04T10:51:27Z', phone:
        '587-393-6727', photo: 'https://robohash.org/nihilblanditiisexercitationem.bmp?size=50x50&set=set1', prefix: 'Rev', suffix: 'Rev'}];
    const data = await guestService.searchGuests(searchParams).toPromise();
    expect(data).toEqual( mockResult );
  });

  it('should return correct sorted result', async () => {
    const searchParams = new SearchParams();
    searchParams.term = 'jel';
    searchParams.sortSetup = {
      active: 'name',
      direction: 'asc'
    };
    // tslint:disable-next-line:max-line-length
    const mockResult = [{address: '806 Northridge Park', birthdate: '4/22/2018', email: 'djellemanjc@newsvine.com', email2: 'djellemanjc@elegantthemes.com', first_name: 'Dela', gender: 'Female', last_name: 'Jelleman', localid: 697, loyalty_member_id: '86-9673047', modified: '2018-12-29T11:54:13Z', phone: '714-812-5609', photo: 'https://robohash.org/nisirepellataut.bmp?size=50x50&set=set1', prefix: 'Honorable', suffix: 'Ms', name: 'Dela Jelleman'}, {address: '7 Kinsman Alley', birthdate: '9/6/2018', email: 'jheads0@bigcartel.com', email2: 'jheads0@hatena.ne.jp', first_name: 'Jelene', gender: 'Female', last_name: 'Heads', localid: 1, loyalty_member_id: '68-5798732', modified: '2019-01-04T10:51:27Z', phone: '587-393-6727', photo: 'https://robohash.org/nihilblanditiisexercitationem.bmp?size=50x50&set=set1', prefix: 'Rev', suffix: 'Rev', name: 'Jelene Heads'}, {address: '0268 Debs Avenue', birthdate: '12/24/2018', email: 'rjellardg0@so-net.ne.jp', email2: 'rjellardg0@altervista.org', first_name: 'Rasla', gender: 'Female', last_name: 'Jellard', localid: 577, loyalty_member_id: '55-0151180', modified: '2019-03-21T18:33:08Z', phone: '884-198-8041', photo: 'https://robohash.org/dignissimossedet.jpg?size=50x50&set=set1', prefix: 'Ms', suffix: 'Rev', name: 'Rasla Jellard'}];
    const data = await guestService.searchGuests(searchParams).toPromise();
    expect(data).toEqual( mockResult );
  });

});
