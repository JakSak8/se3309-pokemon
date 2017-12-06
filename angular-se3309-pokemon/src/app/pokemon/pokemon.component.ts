import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SearchPokemonName(pokeName:string){
    alert(pokeName);
  }

  SearchPokemonType(pokeType:string){
    alert(pokeType);
  }

}
