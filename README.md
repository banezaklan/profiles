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

The code was successfully run and tested on Windows, node version v10.16.3

#### Installation
- Clone the repo.
- run `npm install` 
- After it completes, run `ng serve`
- To run tests, `ng test`

#### Differences to specifications
Screenshots of the original design are somewhat obsolete compared to current Angular material specs.
I tried to keep the UI as close to specs as seemed reasonable when you take into account twisting the standard
Angluar material framework components and layout to make it resemble the design.

Also on the master page, the search i interactive, and not activated by clicking the button as requested.
It would be my proposal to a UI designer as better solution, but it certainly could be easily made as requested. 

Hope I got the point of the assignment.
