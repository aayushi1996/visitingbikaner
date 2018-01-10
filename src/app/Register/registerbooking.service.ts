import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RegisterBookingService {
  constructor (private http: Http) {}
  storePlaceBooking(PlaceBookingModel: any) {
    return this.http.post('https://visitingbikaner.firebaseio.com/placebooking.json', PlaceBookingModel );
  }
  storeHotelBooking(HotelBookingModel: any) {
    return this.http.post('https://visitingbikaner.firebaseio.com/hotelbooking.json', HotelBookingModel );
  }
}
