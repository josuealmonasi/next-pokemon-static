import { FC } from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/layouts';

const Home: FC<NextPage> = () => {
  return (
    <Layout title={'Pokémon App'}>
      <h1>Hello world!</h1>
    </Layout>
  );
};

export default Home;
