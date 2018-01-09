import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {InformationModule} from './Information/information.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InformationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
