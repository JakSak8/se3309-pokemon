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

  pokeNames: string[];
  typeNames: any[];
  hitPointss: any[];
  attacks: any[];
  defenses: any[];
  specialAttacks: any[];
  specialDefenses: any[];
  speeds: any[];

  constructor(private http: Http, private pokemonService: PokemonService) { 

  }

  ngOnInit() {
  }

  SearchPokemonName(pokemonName:string){
    return this.pokemonService.SearchPokemonName(pokemonName).subscribe(
      data => this.displayPokemon(data),
      err => console.log(err),
    );
    
    
  }

  SearchPokemonType(pokeType:string){
    return this.pokemonService.SearchPokemonType(pokeType).subscribe(
      data => {this.displayPokemon(data);
      },
      err => console.log(err),
    );

  }

  displayPokemon(data){
    this.pokemons = data.pokemon;
    
  }
}
