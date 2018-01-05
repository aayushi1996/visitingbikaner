import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HotelBookingFormComponent} from './hotel-booking-form/hotel-booking-form.component';
import {PlaceBookingFormComponent} from './place-booking-form/place-booking-form.component';
import {AppComponent} from '../app.component';




@NgModule({
  declarations: [
    HotelBookingFormComponent,
    PlaceBookingFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class RegisterModule { }
