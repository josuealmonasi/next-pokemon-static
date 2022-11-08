import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Spacer,
  Grid,
  Badge,
  Container,
  Image,
} from '@nextui-org/react';

export interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <Spacer y={2} />

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
              <Row align='center'>
                <Text h1 transform='capitalize'>
                  {pokemon.name}
                </Text>

                <Spacer y={2} />

                <Button auto color={'gradient'}>
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight='bold'
                    transform='uppercase'
                  >
                    ❤️
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
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=251');
  const paths = data.results.map((_p, i) => ({ params: { id: `${i + 1}` } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}/`);

  return {
    props: {
      pokemon: { name: data.name, abilities: data.abilities, sprites: data.sprites },
    },
  };
};

export default PokemonPage;
