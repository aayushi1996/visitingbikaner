import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-visiting-places',
  templateUrl: './visiting-places.component.html',
  styleUrls: ['./visiting-places.component.css']
})
export class VisitingPlacesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  booknow() {
    this.route.navigate(['visitingplaces', 'placebooking']);
  }
}
