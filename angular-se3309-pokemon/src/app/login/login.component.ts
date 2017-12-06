import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  signIn(){
     //this.loginService.signIn().map(res => res.json());
  }

  

}
