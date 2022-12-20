import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { PokemonShort } from 'interfaces';

interface PokemonCardProps {
  pokemon: PokemonShort;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const router = useRouter();

  const handleOnclick = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} key={pokemon.id}>
      <Card isHoverable isPressable onClick={handleOnclick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image loading='lazy' src={pokemon.image} width='100%' height={140} />

          <Card.Footer>
            <Row justify='space-between'>
              <Text transform='capitalize'>{pokemon.name}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
