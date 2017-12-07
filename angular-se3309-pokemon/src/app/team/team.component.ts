import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TeamService } from '../team.service';
import 'rxjs/add/operator/map'
import { USER_NAME } from '../username.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService],
})
export class TeamComponent implements OnInit {

  teams: any[];

  constructor(private http: Http, private teamService: TeamService) { }

  ngOnInit() {
  }

  CreateTeam(teamName:string){
    return this.teamService.CreateTeam(teamName,localStorage.getItem(USER_NAME)).subscribe(
      data => this.CreateTeamConfirm(data),
      err => console.log(err),
    );
  
  }

  CreateTeamConfirm(data){
    alert("Your team has been created!");
  }

  GetTeams(){
    return this.teamService.GetTeams(localStorage.getItem(USER_NAME)).subscribe(
      data => {this.ShowTeams(data);
        console.log(data)},
      err => console.log(err),
    );
  }

  ShowTeams(data){
    this.teams = data.teams;
 
  }

}
