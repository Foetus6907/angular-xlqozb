import { Injectable } from '@angular/core';
import { Store }  from './store';
import { PokemonState } from './pokemon-state';
import { Pokemon } from './pokemon';


@Injectable({providedIn: 'root'})
export class PokemonStore extends Store<PokemonState> {
  constructor () {
    super(new PokemonState());
  }

  

  addPokemon (pokemon: Pokemon): void {
    this.setState({
      ...this.state,
      pokemons: [...this.state.pokemons, pokemon]
    });
  }

  incrementMax(increment: number): void {
    this.setState({
      ...this.state,
      max: this.state.max + increment
    });
  }

  setMax(max:number):void{
    this.setState({
      ...this.state,
      max: this.state.max = max
    });
  }

}