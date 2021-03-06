import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  signin: any[];
  signout: any[];

  signIn(nusername: string, npassword: string) {
    var body = {
      username: nusername,
      password: npassword
    }
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
