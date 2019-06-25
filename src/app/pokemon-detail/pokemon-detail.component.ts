import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService }  from '../pokemon.service';
import { PokemonStore } from '../pokemon-store';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService,
              private location: Location, private store: PokemonStore) {

  }

  ngOnInit() {
    this.getPokemon();
    
    this.store.state$.subscribe(state => {
     
    });  
  }

  getPokemon():void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.pokemon = this.store.state.pokemons.find(pokemon=>pokemon.id==id)
  }

  goBack(){
    this.location.back();
  }

}