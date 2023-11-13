import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'services/getMovies';

import FilmsList from 'components/FilmsList/FilmsList';

import { StyledHeader } from './Home.module';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <StyledHeader>Trending today</StyledHeader>
      <FilmsList movies={movies} />
    </>
  );
};

export default Home;
