import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'zhuoda'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router : Router){}

  handleLogin(){
    if(this.username === "zhuoda" && this.password == "dummy"){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } 
    else{
      this.invalidLogin = true;
    }
  }
}