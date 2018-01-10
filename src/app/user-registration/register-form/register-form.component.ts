import { Component, OnInit } from '@angular/core';
import {RegisterModel} from './register.model';
import {NgForm} from '@angular/forms';
import {RegisterService} from '../register.service';




@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model = new RegisterModel('', '', '', '', '', '', '', '', '');

  constructor(private registerService: RegisterService) {
  }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
    this.registerService.storeUsers(this.model)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    console.log(registerForm.value);
    alert('You are Registered to Bikaner');
  }
}
