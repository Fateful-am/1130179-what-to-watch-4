import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {ALL_GENRES, MovieStatus, PageKind} from '../../consts';
import {getMovies, getPromoMovieId} from '../data/selectors';
import {getMovieById} from '../../utils/helpers';

const getFilteredGenreMovies = (state) => {
  const activeGenre = getActiveGenre(state);
  const currentMovieId = getCurrentMovieId(state);
  return getMovies(state).filter((movie) => {
    if (activeGenre === ALL_GENRES) {
      return true;
    }
    return movie.genre === activeGenre && movie.id !== currentMovieId;
  });
};

export const getRenderedMovieCount = (state) => {
  return state[NameSpace.MOVIE].renderedMovieCount;
};

export const getGenreMovies = createSelector(
    getFilteredGenreMovies,
    getRenderedMovieCount,
    (genreMovies, movieCount) => {
      return genreMovies.slice(0, movieCount);
    }
);

export const getCurrentMovieId = (state) => {
  return state[NameSpace.MOVIE].currentMovieId;
};

export const getActiveGenre = (state) => {
  return state[NameSpace.MOVIE].genre;
};

export const getCurrentPage = (state) => {
  return state[NameSpace.MOVIE].currentPage;
};

export const getNeedShowMoreButton = (state) => {
  return getFilteredGenreMovies(state).length > getRenderedMovieCount(state);
};

export const getMovieIdForPlay = (state) => {
  if (getCurrentPage(state) === PageKind.MAIN) {
    return getPromoMovieId(state);
  }

  return getCurrentMovieId(state);
};

export const getIsFavoriteMovie = (state) => {
  const movieIdForPlay = getMovieIdForPlay(state);
  return getMovieById(getMovies(state), movieIdForPlay).isFavorite ? MovieStatus.FAVORITE : MovieStatus.NOT_FAVORITE;
};
