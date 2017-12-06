import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PokemonService } from '../pokemon.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService],
})
export class PokemonComponent implements OnInit {

  private url = 'http://localhost:8081/api/';

  constructor(private http: Http, private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  SearchPokemonName(pokemonName:string){
    return this.pokemonService.SearchPokemonName(pokemonName).subscribe(
      data => console.log(data),
      err => console.log(err),
    );
    

  }

  SearchPokemonType(pokeType:string){
    return this.pokemonService.SearchPokemonName(pokeType).subscribe(
      data => console.log(data),
      err => console.log(err),
    );
  }

}
