import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  private URL = "http//localhost:8081/api/";

<<<<<<< HEAD
  signIn(nusername: String, npassword: String){
=======
  signin;
  signout;


  signIn(nusername: string, npassword: string) {
>>>>>>> 2fef876a8777415f4609ef702a6498d1fdb1243c
    var body = {
      username: nusername,
      password: npassword
    }
    return this.http.post(this.URL, body);
  }

  singUp(nusername: string, npassword: string, nemail: string, nname: string){
    var body = {
      username: nusername,
      password: npassword,
      email: nemail,
      name: nname
    }
    return this.http.post(this.URL, body);
  }
}
