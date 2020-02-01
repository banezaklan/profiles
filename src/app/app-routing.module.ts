import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/guests', pathMatch: 'full' },
  { path: 'guests', component: GuestsComponent },
  { path: 'guests/:id', component: GuestDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
