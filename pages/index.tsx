import { GetStaticProps, NextPage } from 'next';
import pokeApi from 'api/pokeApi';

import { Layout } from 'components/layouts';
import { PokemonGrid } from 'components/pokemon';
import { PokemonListResponse, PokemonShort } from 'interfaces/pokemonList';

interface HomePageProps {
  pokemons: PokemonShort[];
}

const Home: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout title={'Pokémon App'}>
      <PokemonGrid pokemonList={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async _ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=251');
  const pokemons = data.results.map((p, i) => ({
    ...p,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
    id: `${i + 1}`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
