import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelBookingFormComponent} from './hotel-booking-form/hotel-booking-form.component';
import {PlaceBookingFormComponent} from './place-booking-form/place-booking-form.component';


const registerRoute: Routes = [
  {path: 'hotelbooking' , component: HotelBookingFormComponent},
  {path: 'placebooking' , component: PlaceBookingFormComponent}
];

@NgModule ({
  imports : [
    RouterModule.forChild(registerRoute),
  ],
  exports: [RouterModule]
})

export class RegisterRoutingModule {}
