import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Http } from '@angular/http'
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  signin: any[];
  signinData: any[];
  signout: any[];
  signoutData: any[];

  constructor(private loginService: LoginService, http: Http, private router: Router) { }

  ngOnInit() {
  }

  signIn(user: string, pass: string){
    console.log(user);
    console.log(pass);
    this.loginService.signIn(user, pass).subscribe(
      data => this.signInConfirmed(data, user),
      //data => console.log(data.user[0]),
      err => console.log(err),
    );
  }


  signInConfirmed(data, username: string){
    console.log(data);
    this.signin = data.user;
    console.log(this.signin[0].length != 0);
    if (this.signin[0].length != 0) {
      this.loginService.authenticate = true;
      this.loginService.username = username;
      return this.router.navigate(['../home'])
    } else {
      alert("please create an account");
    }
  }

  signup(user: string, pass: string, nemail: string, name: string){
    this.loginService.signUp(user, pass, name, nemail).subscribe(
      //data => this.signInConfirmed(data),
      data => this.signupConfirmed(data),
      err => console.log(err),
    );
  }

  signupConfirmed(data){
    alert("successful sign up, please sign in to continue");
  }

}
