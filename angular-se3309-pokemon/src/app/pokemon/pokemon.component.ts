import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PokemonService } from '../pokemon.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService],
})
export class PokemonComponent implements OnInit {

  pokemons: any[];

  constructor(private http: Http, private pokemonService: PokemonService) { 

  }

  ngOnInit() {
  }

  SearchPokemonName(pokemonName:string){
    return this.pokemonService.SearchPokemonName(pokemonName).subscribe(
      data => {this.DisplayPokemon(data)},
      err => console.log(err),
    );
    
    
  }

  SearchPokemonType(pokeType:string){
    return this.pokemonService.SearchPokemonType(pokeType).subscribe(
      data => {this.DisplayPokemon(data)},
      err => console.log(err),
    );

  }

  AllPokemon(){
    return this.pokemonService.AllPokemon().subscribe(
      data => {this.DisplayPokemon(data)},
      err => console.log(err),
    );
  }

  DisplayPokemon(data){
    this.pokemons = data.pokemon;
    
  }
}
