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
    name:"normal",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/normal.png"
  },
  {
    id:"1",
    name:"fire",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/fire.png"
  },
  {
    id:"1",
    name:"glass",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/glass.png"
  },
  {
    id:"1",
    name:"poison",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/poison.png"
  },
  {
    id:"1",
    name:"ground",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/ground.png"
  },
  {
    id:"1",
    name:"fight",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/fight.png"
  },
  {
    id:"1",
    name:"psy",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/psy.png"
  },
  {
    id:"1",
    name:"gosth",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/gosth.png"
  },
  {
    id:"1",
    name:"fairy",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/fairy.png"
  },
  {
    id:"1",
    name:"electric",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/electric.png"
  },
  {
    id:"1",
    name:"dragon",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/dragon.png"
  },
  {
    id:"1",
    name:"bug",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/bug.png"
  },
  {
    id:"1",
    name:"flight",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/flight.png"
  },
  {
    id:"1",
    name:"rock",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/rock.png"
  },
  {
    id:"1",
    name:"steel",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/steel.png"
  },
];

export class PokemonState {
  pokemons: Pokemon[] = POKEMONS;
  min: number = MIN;
  max: number = MAX;
  types: Type[] = TYPES;
}