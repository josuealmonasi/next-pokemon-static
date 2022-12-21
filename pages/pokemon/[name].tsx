import { Spacer } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { pokeApi } from 'api';
import { Layout } from 'components/layouts';
import { PokemonDetail } from 'components/pokemon';
import { Pokemon, PokemonListResponse } from 'interfaces';
import { isFav, toggleFav } from 'utils';
import confetti from 'canvas-confetti';

export interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const [isFavoritePokemon, setIsFavoritePokemon] = useState(isFav(pokemon.id));

  const handleToggleFav = () => {
    toggleFav(pokemon.id);
    setIsFavoritePokemon(!isFavoritePokemon);
    if (isFavoritePokemon) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 150,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Spacer y={2} />

      <PokemonDetail
        isFav={isFavoritePokemon}
        pokemon={pokemon}
        onToggleFav={handleToggleFav}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=251');
  const paths = data.results.map(p => ({ params: { name: p.name } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}/`);

  return {
    props: {
      pokemon: {
        name: data.name,
        abilities: data.abilities,
        sprites: data.sprites,
        id: data.id,
      },
    },
  };
};

export default PokemonPage;
