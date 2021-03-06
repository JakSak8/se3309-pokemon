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

  UpdateTeam(teamIDs:string, newTeamName:string){
    var body = {
        teamID: teamIDs,
        teamName: newTeamName   
    }
    return this.http.put("/api/update_team", body);
        
  }

  AddPokemon(teamIDs:string, newPokeName:string){
    var body = {
      teamID: teamIDs,
      pokeName: newPokeName
    }
    return this.http.post("/api/mypokemon_create",body);
  }

  GetTeams(userName:string){
    var body = {
      username: userName
    }
    return this.http.post("/api/show_teams", body).map(res=>res.json());
  }

  Teams(userName:string){
    var body = {
      username: userName
    }
    return this.http.post("/api/teams", body).map(res=>res.json());
  }

}
