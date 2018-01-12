import { Component, OnInit } from '@angular/core';
import {PlaceBookingModel} from './place-booking.model';
import {NgForm} from '@angular/forms';
import {RegisterBookingService} from '../registerbooking.service';

@Component({
  selector: 'app-place-booking-form',
  templateUrl: './place-booking-form.component.html',
  styleUrls: ['./place-booking-form.component.css']
})
export class PlaceBookingFormComponent implements OnInit {
    PlaceBookingModel = new PlaceBookingModel();
  constructor(private registerBookingService: RegisterBookingService) { }

  ngOnInit() {
  }
  onBooknow(book: NgForm) {
    this.registerBookingService.storePlaceBooking(this.PlaceBookingModel)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    console.log(book.value);
    alert('You Booking is done');
    book.resetForm(book);
  }

}
