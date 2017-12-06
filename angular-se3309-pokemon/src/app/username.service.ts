import { Injectable } from '@angular/core';

@Injectable()
export class UsernameService {

  constructor() { }

  private username: String;
  private authenticate: Boolean;

  setAuthentication(auth: Boolean){
    this.authenticate = auth;
    console.log(this.authenticate);
  }

  getAuthentication(){
    console.log(this.authenticate);
    return this.authenticate;
  }

  setUserName(name: String){
    this.username = name;
    console.log(this.username);
  }

  getUserName(){
    return this.username;
  }
}
