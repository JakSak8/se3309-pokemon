import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
    console.log('Name');
    var body = {
      pokeName: pokemonName
    }
    return this.http.post("/api/pokemon_name", body);//.subscribe(data=> {console.log(data)});
  }

  SearchPokemonType(pokeType:string) {
    console.log('Type');
    var body = {
      typeName: pokeType
    }
    return this.http.post("/api/pokemon_type", body);//.subscribe(data => {console.log(data)});
  }

}
