# profiles
This a simple example of master-detail page using mock data of user profiles.
The master page is a interactive searchable page with results displayed in a sortable 
data table format. The columns are sortable, and the paging is maintained when sorting changes.
The detail page is just displaying selected user's data, and some mock 'quick facts' for the user.
The data is kept in the in-memory service as mock rest api and it is also used in the tests.

User details are separated into editable fields with their own input format and appropriate input controls.

There are two tests added to the project, for guest.service and for guest.component.

The guest.service component tests are working as expected.

I haven't been able to setup the tests for guest.component properly. It would take more time to mock required services and properly setup testing router.

#### Requirements

The code was successfully run and tested on node version v10.16.3

#### Installation
- Clone the repo.
- run `npm install` 
- After it completes, run `ng serve`
- To run tests, `ng test`

