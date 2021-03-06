import NameSpace from '../name-space';
import {getMovieById, getSortedUniqueObjectValues} from '../../utils/helpers';
import {ALL_GENRES, MAX_GENRE_COUNT} from '../../consts';

export const getMovies = (state)=> {
  return state[NameSpace.DATA].movies;
};

export const getPromoMovieId = (state) => {
  return state[NameSpace.DATA].promoMovieId;
};

export const getPromoMovie = (state) => {
  return getMovieById(getMovies(state), getPromoMovieId(state));
};

export const getAllGenres = (state) => {
  const allGenres = getSortedUniqueObjectValues(getMovies(state), `genre`)
    .slice(0, MAX_GENRE_COUNT);
  allGenres.unshift(ALL_GENRES);
  return allGenres;
};
