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
    id:"2",
    name:"normal",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/normal.png"
  },
  {
    id:"3",
    name:"fire",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/fire.png"
  },
  {
    id:"4",
    name:"ice",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/glass.png"
  },
  {
    id:"5",
    name:"poison",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/poison.png"
  },
  {
    id:"6",
    name:"ground",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/ground.png"
  },
  {
    id:"7",
    name:"fighting",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/fight.png"
  },
  {
    id:"7",
    name:"psychic",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/psy.png"
  },
  {
    id:"8",
    name:"gosth",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/gosth.png"
  },
  {
    id:"9",
    name:"fairy",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/fairy.png"
  },
  {
    id:"10",
    name:"electric",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/electric.png"
  },
  {
    id:"11",
    name:"dragon",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/dragon.png"
  },
  {
    id:"12",
    name:"bug",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/bug.png"
  },
  {
    id:"13",
    name:"flying",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/flight.png"
  },
  {
    id:"14",
    name:"rock",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/rock.png"
  },
  {
    id:"15",
    name:"steel",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/steel.png"
  },
  {
    id:"16",
    name:"water",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/water.png"
  },
  {
    id:"16",
    name:"dark",
    iconUrl:"https://cdn.jsdelivr.net/gh/Foetus6907/angular-xlqozb@master/dark.png"
  },
];

export class PokemonState {
  pokemons: Pokemon[] = POKEMONS;
  min: number = MIN;
  max: number = MAX;
  types: Type[] = TYPES;
}