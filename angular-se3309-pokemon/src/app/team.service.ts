import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  CreateTeam(teamname:string){
    var body = {
        teamName: teamname
    }
    return this.http.post("/api/create_team", body);
        
  }

  GetTeams(){
    var body = {
      
    }
    return this.http.post("/api/show_team", body).map(res=>res.json());
  }

}
