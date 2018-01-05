import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterModule} from './Register/register.module';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    UserRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
