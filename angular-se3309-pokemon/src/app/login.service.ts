import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  private URL = "http//localhost:8081/api/";

  signIn(nusername: String, npassword: String){
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
