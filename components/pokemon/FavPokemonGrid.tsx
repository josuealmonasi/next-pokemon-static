import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';

interface FavPokemonGridProps {
  favs: number[];
}

export const FavPokemonGrid: FC<FavPokemonGridProps> = ({ favs }) => (
  <Grid.Container gap={2} justify='flex-start'>
    {favs.length !== 0 &&
      favs.map(id => (
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
      ))}
  </Grid.Container>
);
