import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Image,
  Row,
  Text,
} from '@nextui-org/react';
import { FC } from 'react';
import { Pokemon } from 'interfaces';

interface PokemonDetailProps {
  pokemon: Pokemon;
  isFav: boolean;
  onToggleFav: () => void;
}

export const PokemonDetail: FC<PokemonDetailProps> = ({
  pokemon,
  isFav,
  onToggleFav,
}) => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} sm={5} md={4}>
        <Card>
          <Card.Body>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                '/images/not-found.png'
              }
              alt={pokemon.name}
              loading='lazy'
              width={300}
              objectFit='contain'
            />
          </Card.Body>

          <Card.Footer
            isBlurred
            css={{
              bgBlur: '#9d6df646',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Text>Abilities:</Text>
                </Row>
                <Row css={{ padding: 0 }}>
                  <Grid.Container gap={1}>
                    {pokemon.abilities.map(a => (
                      <Grid key={a.slot}>
                        <Badge disableOutline color='primary'>
                          <Text transform='capitalize' color='withe'>
                            {a.ability.name}
                          </Text>
                        </Badge>
                      </Grid>
                    ))}
                  </Grid.Container>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>

      <Grid xs={12} sm={7} md={8}>
        <Card>
          <Card.Header css={{ p: 24 }}>
            <Row align='center' justify='space-between' wrap='wrap'>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>

              <Button auto color={'gradient'} ghost={!isFav}>
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  onClick={onToggleFav}
                >
                  {`${isFav ? 'Remove from' : 'Add to'} favorites`}
                </Text>
              </Button>
            </Row>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Sprites:</Text>

            <Container direction='row' display='flex' gap={0}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />

              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />

              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
