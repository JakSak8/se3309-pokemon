import { Component } from '@angular/core';
import { UsernameService } from './username.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsernameService]
})
export class AppComponent {
  title = 'app';

  constructor(private usernameService: UsernameService){}

  isAuthenticated(): Boolean{
    
    if (this.usernameService.getAuthentication() == "true"){
      return true;
    } else {
      return false;
    }
  }

  LogOut(){
    this.usernameService.logout();
  }

}
