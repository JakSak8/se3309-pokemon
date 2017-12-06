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
    this.loginService.signIn(user, pass).subscribe(
      data => this.signInConfirmed(data),
      err => console.log(err),
    );
  }

  signInConfirmed(data){
    if (data._body[0] == !null) {
      this.loginService.authenticate = true;
      return this.router.navigate(['../home'])
    } else {
      alert("please create an account");
    }
  }
}
