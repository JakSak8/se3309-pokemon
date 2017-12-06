import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'app';

  constructor(private loginService: LoginService){}

  isAuthenticated(): boolean{
    if (this.loginService.authenticate == true){
      return true;
    } else {
      return false;
    }
  }

}
