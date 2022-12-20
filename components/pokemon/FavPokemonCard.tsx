import React, { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { pokeApi } from 'api';
import { PokemonShort } from 'interfaces';

interface FavPokemonCard {
  id: number;
}
export const FavPokemonCard: FC<FavPokemonCard> = ({ id }) => {
  const router = useRouter();

  const handleOnclick = async () => {
    const { data } = await pokeApi.get<PokemonShort>(`/v2/pokemon/${id}`);
    const { name } = data;
    router.push(`/pokemon/${name}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} onClick={handleOnclick}>
      <Card isHoverable isPressable>
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
};
