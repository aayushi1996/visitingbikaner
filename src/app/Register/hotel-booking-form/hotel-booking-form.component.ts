import { Component, OnInit } from '@angular/core';
import {HotelbookingModel} from './hotelbooking.model';
import {NgForm} from '@angular/forms';
import {RegisterBookingService} from '../registerbooking.service';

@Component({
  selector: 'app-hotel-booking-form',
  templateUrl: './hotel-booking-form.component.html',
  styleUrls: ['./hotel-booking-form.component.css']
})
export class HotelBookingFormComponent implements OnInit {
  rooms= 'Select Room';
  hotelBookingModel= new HotelbookingModel('', '' , '', '', '', '', '');
  constructor(private registerBookingService: RegisterBookingService) { }

  ngOnInit() {
  }
  onAddBooking(hotelbook: NgForm) {
    this.registerBookingService.storeHotelBooking(this.hotelBookingModel)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    console.log(hotelbook.value);
    alert('You are Registered to Bikaner');
  }
}
