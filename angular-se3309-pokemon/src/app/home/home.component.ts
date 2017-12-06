import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
