import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BikaneriCuisinesComponent} from './bikaneri-cuisines/bikaneri-cuisines.component';
import {HotelsComponent} from './hotels/hotels.component';
import {VisitingPlacesComponent} from './visiting-places/visiting-places.component';


@NgModule({
  declarations: [
    BikaneriCuisinesComponent,
    HotelsComponent,
    VisitingPlacesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class InformationModule { }
