import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }


<<<<<<< HEAD
  signIn(nusername: String, npassword: String){
=======
  signin: any[];
  signout: any[];


  signIn(nusername: string, npassword: string) {
>>>>>>> 4d344f42d3808f7d821139ae550c5982e36e72ca
    var body = {
      username: nusername,
      password: npassword
    }
    console.log(URL);
    return this.http.post("/api/sign_in", body);
  }

  singUp(nusername: string, npassword: string, nemail: string, nname: string){
    var body = {
      username: nusername,
      password: npassword,
      email: nemail,
      name: nname
    }
    return this.http.post("/api/create_user", body);
  }
}
