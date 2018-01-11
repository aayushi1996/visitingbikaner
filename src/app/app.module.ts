import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterModule} from './Register/register.module';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InformationModule} from './Information/information.module';
import {AppRoutingModule} from './app-routing-module';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    InformationModule,
    AppRoutingModule
    ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
