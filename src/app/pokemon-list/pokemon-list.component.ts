import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonStore } from '../pokemon-store';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  max:number = 0;
  private ngUnsubscribe = new Subject();
 
  constructor(private pokemonService: PokemonService, private store: PokemonStore) { }

  ngOnInit() {
    
    this.store.state$.subscribe(state => {
      this.max = state.max;     
      this.pokemons = state.pokemons.sort((a,b)=> a.id-b.id );
    });    
  }

  ngOnDestroy() {      
        this.ngUnsubscribe.complete();
    }

  morePokemon(){    
    const increment = 10;
    const min = this.max + 1;
    const newMax = min + increment;
    this.store.setMax(newMax);
    this.pokemonService.getPokemonsFromApi(min, newMax)
  }

}