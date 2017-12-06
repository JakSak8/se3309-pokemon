import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Http } from '@angular/http'
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

  constructor(private loginService: LoginService, http: Http) { }

  ngOnInit() {
  }

<<<<<<< HEAD
=======

>>>>>>> 4d344f42d3808f7d821139ae550c5982e36e72ca
  signIn(user: string, pass: string){
    this.loginService.signIn(user, pass).subscribe(
      //ata => this.signInConfirmed(data),
      data => console.log(data),
      err => console.log(err),
    );
  }

<<<<<<< HEAD
  signInConfirmed(data){
    // this.imageName = [];
    // this.imageData = data.collection.items;
    // for (var i = 0; i < this.imageData.length; i++){
    //   this.images.push(this.imageData[i].links[0].href);
    //   this.imageName.push(this.imageData[i].data[0].title);
   // };
  }

  

=======
  // signInConfirmed(data){
  //   if data.[1] == true;
  //   for (var i = 0; i < this.imageData.length; i++){
  //     this.images.push(this.imageData[i].links[0].href);
  //     this.imageName.push(this.imageData[i].data[0].title);
  //   };
  // }
>>>>>>> 4d344f42d3808f7d821139ae550c5982e36e72ca
}
