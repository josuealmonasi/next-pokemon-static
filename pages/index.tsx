import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonShort, PokemonListResponse } from '../interfaces/pokemonList';
import { PokemonList } from '../components/pokemon/PokemonGrid';

interface HomePageProps {
  pokemons: PokemonShort[];
}

const Home: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout title={'Pokémon App'}>
      <PokemonList pokemonList={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
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
