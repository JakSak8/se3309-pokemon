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

  constructor(private loginService: LoginService, http: Http) { }

  ngOnInit() {
  }



  signIn(user: string, pass: string){
    this.loginService.signIn(user, pass).subscribe(
      data => this.signInConfirmed(data),
      err => console.log(err),
    );
  }

  signInConfirmed(data){
    this.imageName = [];
    this.imageData = data.collection.items;
    for (var i = 0; i < this.imageData.length; i++){
      this.images.push(this.imageData[i].links[0].href);
      this.imageName.push(this.imageData[i].data[0].title);
    };
  }

  

}
