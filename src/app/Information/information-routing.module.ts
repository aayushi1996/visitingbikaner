import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisitingPlacesComponent} from './visiting-places/visiting-places.component';
import {HotelsComponent} from './hotels/hotels.component';
import {BikaneriCuisinesComponent} from './bikaneri-cuisines/bikaneri-cuisines.component';
import {CommonModule} from '@angular/common';

const appInformationRoute: Routes = [
  {path: 'visitingplaces', component: VisitingPlacesComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'cuisins', component: BikaneriCuisinesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appInformationRoute)
  ],
  exports: [RouterModule]
})
export class InformationRoutingModule {}
