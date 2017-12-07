import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgModel } from '@angular/forms';
import { TeamService } from '../team.service';
import { USER_NAME } from '../username.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService],
})
export class TeamComponent implements OnInit {

  teams: any[];
  _teams: any[];
  selectedTeam1;
  selectedTeam2;

  constructor(private http: Http, private teamService: TeamService) { }

  ngOnInit() {
    this.refresh();
  }

  CreateTeam(teamName:string){
    return this.teamService.CreateTeam(teamName,localStorage.getItem(USER_NAME)).subscribe(
      data => this.CreateTeamConfirm(data),
      err => console.log(err),
    );
  
  }

  CreateTeamConfirm(data){
    alert("Your team has been created");
    this.refresh();
  }

  UpdateTeam(teamIDs:string, newTeamName:string){
    return this.teamService.UpdateTeam(teamIDs,newTeamName).subscribe(
      data => {this.UpdateTeamConfirm(data)},
      err => console.log(err),
    );
  
  }

  UpdateTeamConfirm(data){
    alert("Your team has been updated!");
    this.refresh();
  }

  AddPokemon(teamIDs:string, newPokeName:string){
    return this.teamService.AddPokemon(teamIDs,newPokeName).subscribe(
      data => {this.AddPokemonConfirm(teamIDs,data)},
      err => console.log(err),
    );
  }

  AddPokemonConfirm(teamID:string, data){
    alert("Your Pokemon has been added to team " + teamID);
    this.refresh();
  }

  GetTeams(){
    return this.teamService.GetTeams(localStorage.getItem(USER_NAME)).subscribe(
      data => {this.ShowTeams(data);
        console.log(data)},
      err => console.log(err),
    );
  }

  Teams(){
    return this.teamService.Teams(localStorage.getItem(USER_NAME)).subscribe(
      data => {this.Show_Teams(data);
        console.log(data)},
      err => console.log(err),
    );
  }

  ShowTeams(data){
    this.teams = data.teams;
  }

  Show_Teams(data){
    this._teams = data.team;
  }

  refresh(){
    this.Teams();
    this.GetTeams();   
  }

}
