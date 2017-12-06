import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  const URL = "http//localhost:8081/api/";

  signIn(){
    var body = { nusername: String, npassword: String){
      username: nusername,
      password: npassword
    }
    return this.http.post('url', body);
  }

  singUp(nusername: String, npassword: String, nemail: String, nname: String){
    var body = {
      username: nusername,
      password: npassword,
      email: nemail,
      name: nname
    }
    return this.http.post('url', body);
  }
}
