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
import {AuthGuard} from './auth/auth-guard.service';

const appRoute: Routes = [
  {path: '' , component: HomepageComponent} ,
  {path: 'home' , component: HomepageComponent} ,
  {path: 'visitingplaces', component: VisitingPlacesComponent },
    {path: 'visitingplaces/placebooking', component: PlaceBookingFormComponent, canActivate: [AuthGuard]},
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotels/hotelbooking' , component: HotelBookingFormComponent, canActivate: [AuthGuard]},
  {path: 'cuisins', component: BikaneriCuisinesComponent},
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
];

 @NgModule ({
  imports : [
    RouterModule.forRoot(appRoute, {useHash: true}),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
