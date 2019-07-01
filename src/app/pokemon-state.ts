import { Pokemon } from './pokemon';
import { Type } from './type';


const POKEMONS = [];
const MIN = 14;
const MAX = 0;
const TYPES = [
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  },
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  },
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  },
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  }
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  }
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  }
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  }
  {
    id:"1",
    name:"grass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/grass.png"
  }
];

export class PokemonState {
  pokemons: Pokemon[] = POKEMONS;
  min: number = MIN;
  max: number = MAX;
  types: Type[] = TYPES;
}