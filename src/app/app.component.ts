import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // isConnected: Observable<boolean>;
  online = window.navigator.onLine;

  constructor() {
    // if (navigator.onLine) {
    //   alert('online');
    // } else {
    //   alert('offline');
    // }

    // this.isConnected = Observable.merge(
    //   Observable.of(navigator.onLine),
    //   Observable.fromEvent(window, 'online').map(() => true),
    //   Observable.fromEvent(window, 'offline').map(() => false));

    window.addEventListener('load', function() {
      const status = document.getElementById('status');
      const log = document.getElementById('log');

      function updateOnlineStatus(event) {
        const condition = navigator.onLine ? 'online' : 'offline';

        status.className = condition;
        status.innerHTML = condition.toUpperCase();


      }

      // // window.addEventListener('online',  updateOnlineStatus);
      // window.addEventListener('offline', updateOnlineStatus);
    });

  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAmPj-j0neByBI4Q6HpBWVZlypBjRbN-NA',
      authDomain: 'visitingbikaner.firebaseapp.com'
    });
  }
}
