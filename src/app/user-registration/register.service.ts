import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RegisterService {
  constructor(private http: Http) {}

  storeUsers(model: any) {
    return this.http.post('https://visitingbikaner.firebaseio.com/user.json', model);
  }
}

