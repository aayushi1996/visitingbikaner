import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-visiting-places',
  templateUrl: './visiting-places.component.html',
  styleUrls: ['./visiting-places.component.css']
})
export class VisitingPlacesComponent implements OnInit {

  constructor(private route: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  booknow() {
    if (this.authService.isAuthenticated() === false) {
      alert('invalid user! Please login first to continue');
    } else {
      this.route.navigate(['visitingplaces', 'placebooking']);
    }
  }
}
