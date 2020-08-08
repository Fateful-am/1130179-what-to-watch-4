import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {ALL_GENRES, MOVIE_LIKE_THIS_COUNT, MovieStatus} from '../../consts';
import {getMovies} from '../data/selectors';
import {getMovieById} from '../../utils/helpers';

const getMainPageFilteredByGenreMovies = (state) => {
  const mainPageGenre = getMainPageGenre(state);
  return getMovies(state).filter((movie) => {
    if (mainPageGenre === ALL_GENRES) {
      return true;
    }
    return movie.genre === mainPageGenre;
  });
};

export const getMainPageMovieCardCount = (state) => {
  return state[NameSpace.MOVIE].mainPageMovieCardCount;
};

export const getMainPageGenreMovies = createSelector(
    getMainPageFilteredByGenreMovies,
    getMainPageMovieCardCount,
    (genreMovies, movieCount) => {
      return genreMovies.slice(0, movieCount);
    }
);

export const getMainPageGenre = (state) => {
  return state[NameSpace.MOVIE].mainPageGenre;
};

export const getNeedShowMoreButton = (state) => {
  return getMainPageFilteredByGenreMovies(state).length > getMainPageMovieCardCount(state);
};

export const getLikeThisMoviesExceptCurrent = (state, movieId) => {
  const movieGenre = getMovieGenre(state);
  return getMovies(state).filter((movie) => {
    return movie.genre === movieGenre && String(movie.id) !== String(movieId);
  }) .slice(0, MOVIE_LIKE_THIS_COUNT);
};

export const getFavoriteMovies = (state) => {
  return getMovies(state).filter((movie) => {
    return movie.isFavorite;
  });
};

export const getMovieGenre = (state) => {
  return state[NameSpace.MOVIE].movieGenre;
};

export const getIsFavoriteMovie = (state, movieId) => {
  return getMovieById(getMovies(state), movieId).isFavorite ? MovieStatus.FAVORITE : MovieStatus.NOT_FAVORITE;
};
