import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  auth = true;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {}

  ngOnInit() {
  }
  openBooking() {

    if (this.authService.isAuthenticated() === false) {
      alert('invalid user! Please login first to continue');
    }  else {
      this.router.navigate(['hotelbooking'], {relativeTo: this.route});
    }
  }
}
