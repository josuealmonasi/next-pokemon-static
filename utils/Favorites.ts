const toggleFav = (id: number): void => {
  let favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  localStorage.setItem('favorites', `[${Array.from(favorites)}]`);
};

const isFav = (id: number): boolean => {
  /* Checks if running in a web window */
  if (typeof window === 'undefined') {
    return false;
  }
  return JSON.parse(localStorage.getItem('favorites') || '[]').includes(id);
};

const favPokemons = (): Array<number> =>
  JSON.parse(localStorage.getItem('favorites') || '[]');

export { toggleFav, isFav, favPokemons };
