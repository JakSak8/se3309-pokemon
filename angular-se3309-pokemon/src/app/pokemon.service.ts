import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PokemonService {

  private url = 'http://localhost:8081/api/';

  constructor(private http: Http) { }

  SearchPokemonName(pokemonName:string) {
    console.log('Name');
    var body = {
      pokeName: pokemonName
    }
    return this.http.post(this.url + "/" + pokemonName, body );
  }

  SearchPokemonType(pokeType:string) {
    console.log('Type');
    var body = {
      typeName: pokeType
    }
    return this.http.post(this.url + "/" + pokeType, body);
  }

}
