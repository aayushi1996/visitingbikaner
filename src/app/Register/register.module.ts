import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HotelBookingFormComponent} from './hotel-booking-form/hotel-booking-form.component';
import {PlaceBookingFormComponent} from './place-booking-form/place-booking-form.component';
import {AppComponent} from '../app.component';
import {CommonModule} from '@angular/common';
// import {RegisterRoutingModule} from './register-routing.module';
import {RegisterBookingService} from './registerbooking.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    HotelBookingFormComponent,
    PlaceBookingFormComponent,
  ],
  imports: [
    CommonModule,
    // RegisterRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [RegisterBookingService],
  bootstrap: [AppComponent]
})
export class RegisterModule { }
