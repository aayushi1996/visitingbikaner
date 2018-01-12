import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class RegisterBookingService {
  constructor (private http: Http,
               private authService: AuthService) {}
  storePlaceBooking(PlaceBookingModel: any) {
    const token = this.authService.getToken();
    return this.http.post('https://visitingbikaner.firebaseio.com/placebooking.json?auth=' + token, PlaceBookingModel );
  }
  storeHotelBooking(HotelBookingModel: any) {
    const token = this.authService.getToken();
    return this.http.post('https://visitingbikaner.firebaseio.com/hotelbooking.json?auth=' + token, HotelBookingModel );
  }
}
