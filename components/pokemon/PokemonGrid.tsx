import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { PokemonShort } from '../../interfaces';
import { PokemonCard } from './Pokemoncard';

interface PokemonListPorps {
  pokemonList: PokemonShort[];
}

export const PokemonGrid: FC<PokemonListPorps> = ({ pokemonList }) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
