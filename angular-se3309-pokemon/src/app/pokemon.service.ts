import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  constructor(private http: Http) { }
 
  /*
  headerDict ={
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  requestOptions = {
    headers: new Headers(this.headerDict),
  };
  */

  SearchPokemonName(pokemonName:string) {
    var body = {
      pokeName: pokemonName
    }
    return this.http.post("/api/pokemon_name", body).map(res=>res.json());
  }

  SearchPokemonType(pokeType:string) {
    var body = {
      typeName: pokeType
    }
    return this.http.post("/api/pokemon_type", body).map(res=>res.json());
  }

}
