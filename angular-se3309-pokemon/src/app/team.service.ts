import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  CreateTeam(teamname:string, userName:string){
    var body = {
        teamName: teamname,
        username: userName
    }
    return this.http.post("/api/create_team", body);
        
  }

  GetTeams(userName:string){
    var body = {
      username: userName
    }
    return this.http.post("/api/show_teams", body).map(res=>res.json());
  }

}
