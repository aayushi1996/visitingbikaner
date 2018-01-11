import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelBookingFormComponent} from './Register/hotel-booking-form/hotel-booking-form.component';
import {PlaceBookingFormComponent} from './Register/place-booking-form/place-booking-form.component';
import {HomepageComponent} from './homepage/homepage.component';
import {VisitingPlacesComponent} from './Information/visiting-places/visiting-places.component';
import {HotelsComponent} from './Information/hotels/hotels.component';
import {BikaneriCuisinesComponent} from './Information/bikaneri-cuisines/bikaneri-cuisines.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const appRoute: Routes = [
  {path: '' , component: HomepageComponent} ,
  {path: 'home' , component: HomepageComponent} ,
  {path: 'visitingplaces', component: VisitingPlacesComponent},
  {path: 'visitingplaces/placebooking' , component: PlaceBookingFormComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotels/hotelbooking' , component: HotelBookingFormComponent},
  {path: 'cuisins', component: BikaneriCuisinesComponent},
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
];

@NgModule ({
  imports : [
    RouterModule.forRoot(appRoute),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
