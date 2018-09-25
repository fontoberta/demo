import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Router} from "@angular/router";

import { UsersService } from '../users.service';

export class LoginForm {
  public username: string;
  public password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: any = {};

  constructor(private users: UsersService, private router: Router) { }

  ngOnInit() {
    if (this.users.isAuthenticated()) {
      this.router.navigate(['docker']);
    }
  }

  onSubmit () {
    this.users.authenticate(this.loginForm.username, this.loginForm.password).subscribe(tokens => {
      if (sessionStorage.getItem('user')!= null) {
        sessionStorage.removeItem('user');
      }
        sessionStorage.setItem('user', JSON.stringify({'access': tokens['access_token'], 'refresh': tokens['refresh_token']}));
      this.router.navigate(['docker']);
    },
  error => {
    this.router.navigate(['']);
  });
    
  }

}
