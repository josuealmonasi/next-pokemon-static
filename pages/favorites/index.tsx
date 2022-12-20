import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from 'components/layouts';
import { FavPokemonGrid } from 'components/pokemon';
import { NoFavs } from 'components/ui';
import { favPokemons } from 'utils';

const FavoritesPage: NextPage = () => {
  const [favs, setFavs] = useState<Array<number>>([]);

  useEffect(() => {
    setFavs(favPokemons());
  }, []);

  return (
    <Layout title='Favorite Pokémon'>
      <NoFavs showIn={favs.length === 0} />
      <FavPokemonGrid favs={favs} />
    </Layout>
  );
};

export default FavoritesPage;
