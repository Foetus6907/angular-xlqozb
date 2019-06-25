import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PokemonStore } from './pokemon-store';



@Injectable({providedIn: 'root'})
export class PokemonService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  pokemonList : Pokemon[];


  constructor( private http: HttpClient, private messageService: MessageService, private store: PokemonStore) { }

  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`);
  }
  
  getPokemonByIDFromAPI(id: number): Observable<Pokemon> {
    // TODO: send the message _after_ fetching the pokemon
    this.messageService.add(`PokemonService: fetched pokemon id=${id}`);
    return this.http.get<Pokemon>(this.pokemonsUrl + id)
  }

  getPokemonsFromApi(min:number, max:number){
    for(var i = min; i <= max ;i++){
      this.getPokemonByIDFromAPI(i).subscribe(pokemon => {
        this.store.addPokemon(pokemon)
      });
    }
  }
  

}