import { Pokemon } from './pokemon';

const POKEMONS = [];
const MIN = 14;
const MAX = 0

export class PokemonState {
  pokemons: Pokemon[] = POKEMONS;
  min: number = MIN;
  max: number = MAX;
}