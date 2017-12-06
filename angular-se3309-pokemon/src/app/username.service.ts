import { Injectable } from '@angular/core';

//Constants I will be using within method calls
export const USER_NAME: string = 'username';
export const AUTH: string = 'authentication';

@Injectable()
export class UsernameService {

  constructor() { }

  private username: String;
  private authenticate: Boolean;
  
  
  
  //Changed below methods to use local storage.
  setAuthentication(auth: Boolean){
      localStorage.setItem(AUTH, auth);
  }

  getAuthentication(){
    return localStorage.getItem(AUTH);
  }
  
  setUserName(name: String){
    localStorage.setItem(USER_NAME, user);
  }

  getUserName(){
    return localStorage.getItem(USER_NAME);
  }
  
  
  //Would recommend scrapping Authentication Methods and just checking if username exists, on logout remove username.
  logout(){
    return localStorage.removeItem(USER_NAME);
  }
  
  
  
  
}
