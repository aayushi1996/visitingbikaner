import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterModule} from './Register/register.module';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginFormComponent } from './user-registration/login-form/login-form.component';
import { RegisterFormComponent } from './user-registration/register-form/register-form.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RegisterService} from './user-registration/register.service';


const appRoutes: Routes = [
  {path: 'home' , component: HomepageComponent} ,
  {path: 'login' , component: LoginFormComponent  },
  {path: 'register' , component: RegisterFormComponent  },
  ]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    UserRegistrationComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,

  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
