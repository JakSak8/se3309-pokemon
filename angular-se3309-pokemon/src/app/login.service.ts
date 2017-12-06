import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

//This is a constant I will be using within method calls
export const USER_NAME: string = 'username';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  signin: any[];
  signout: any[];
  
  //Use a get and set to access local storage
  getUser(): string {
    return localStorage.getItem(USER_NAME);
  }
  setUser(user: string): void {
    localStorage.setItem(USER_NAME, user);
  }

  signIn(nusername: string, npassword: string) {
    var body = {
      username: nusername,
      password: npassword
    }
    console.log(URL);
    return this.http.post("/api/sign_in", body).map(res => res.json());
  }

  signUp(nusername: string, npassword: string, nemail: string, nname: string){
    var body = {
      username: nusername,
      password: npassword,
      email: nemail,
      name: nname
    }
    return this.http.post("/api/create_user", body);
  }

 
}
