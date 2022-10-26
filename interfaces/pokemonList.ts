export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: null;
  results: PokemonShort[];
}

export interface PokemonShort {
  name: string;
  url: string;
  image: string;
  id: string;
}
