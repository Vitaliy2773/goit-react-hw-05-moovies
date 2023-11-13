import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import {
  FilmWrapper,
  StyledList,
  ListItem,
  FilmImg,
  FilmTitle,
  FilmDescription,
  GoBackLink,
  FilmSubTitle,
  StyledListDescription,
} from './MoviesDetails.module';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <GoBackLink>
        <Link to={backLinkHref}>Go back</Link>
      </GoBackLink>
      <FilmWrapper>
        <FilmImg
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt="get"
        />
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescription>{movie.overview}</FilmDescription>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDescription>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDescription>
        </div>
      </FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </ListItem>
        </StyledList>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
