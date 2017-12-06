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

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 37a91a3821ff8dd63cc6e4b37c5d74a89679e52c
  signInConfirmed(data){
    // this.imageName = [];
    // this.imageData = data.collection.items;
    // for (var i = 0; i < this.imageData.length; i++){
    //   this.images.push(this.imageData[i].links[0].href);
    //   this.imageName.push(this.imageData[i].data[0].title);
   // };
  }

  

<<<<<<< HEAD
=======
=======
  // signInConfirmed(data){
  //   if data.[1] == true;
  //   for (var i = 0; i < this.imageData.length; i++){
  //     this.images.push(this.imageData[i].links[0].href);
  //     this.imageName.push(this.imageData[i].data[0].title);
  //   };
  // }
>>>>>>> 4d344f42d3808f7d821139ae550c5982e36e72ca
=======
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
>>>>>>> jsakon
>>>>>>> 37a91a3821ff8dd63cc6e4b37c5d74a89679e52c
}
