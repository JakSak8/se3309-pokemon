import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TeamService } from '../team.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService],
})
export class TeamComponent implements OnInit {

  constructor(private http: Http, private teamService: TeamService) { }

  ngOnInit() {
  }

  GetTeams(){
    
  }

}
