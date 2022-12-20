import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { FavPokemonCard } from './FavPokemonCard';

interface FavPokemonGridProps {
  favs: number[];
}

export const FavPokemonGrid: FC<FavPokemonGridProps> = ({ favs }) => (
  <Grid.Container gap={2} justify='flex-start'>
    {favs.length !== 0 && favs.map(id => <FavPokemonCard id={id} key={id} />)}
  </Grid.Container>
);
