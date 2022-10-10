import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
} & PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name='author' content='Josué Almonasi' />
        <meta name='description' content={`Info about Pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokémon, pokemon, pokedex`} />
      </Head>

      {/* NavBar */}

      <main>{children}</main>
    </>
  );
};

export default Layout;
