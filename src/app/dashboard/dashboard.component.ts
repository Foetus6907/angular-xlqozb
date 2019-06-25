import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonStore } from '../pokemon-store';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  pokemons: Pokemon[] = [];
  max :number;

  constructor(private pokemonService: PokemonService, private store: PokemonStore) { }

  ngOnInit() {    
    this.store.state$.subscribe(state => {
      // Logic to execute on state update
      this.pokemons = state.pokemons.sort((a,b)=>b.base_experience - a.base_experience).slice(0, 4);
    });
    
  }
 
}