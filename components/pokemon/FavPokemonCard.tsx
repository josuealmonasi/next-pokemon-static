import { Grid, Card } from '@nextui-org/react';
import React, { FC } from 'react';

interface FavPokemonCard {
  id: number;
}
export const FavPokemonCard: FC<FavPokemonCard> = ({ id }) => (
  <Grid xs={6} sm={3} xl={1} key={id}>
    <Card isHoverable>
      <Card.Body css={{ p: 1 }}>
        <Card.Image
          loading='lazy'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width='100%'
          height={140}
        />
      </Card.Body>
    </Card>
  </Grid>
);
