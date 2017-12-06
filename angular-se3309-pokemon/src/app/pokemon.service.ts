import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PokemonService {

  private url = 'http://localhost:8081/api/';

  constructor(private http: Http) { }

  SearchPokemonName() {
    console.log('Name');
      this.http.get(this.url + "/").subscribe(data => {
        console.log(data);
        return data; 
      });
  }

  SearchPokemonType() {
    console.log('Type');
      this.http.get(this.url + "/").subscribe(data => {
        console.log(data);
        return data; 
      });
  }

}
