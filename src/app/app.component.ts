import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { PokemonStore } from './pokemon-store';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  title = 'Pokemon MG';
  minStart = 1;
  maxStart = 10;

  constructor(private pokemonService: PokemonService, private store: PokemonStore){}

  ngOnInit() {
    this.store.setMax(this.maxStart);
    this.pokemonService.getPokemonsFromApi(1,this.maxStart);       
  }
}
