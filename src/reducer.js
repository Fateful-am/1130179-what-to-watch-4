import {extend} from "./utils/helpers.js";
import {mockMovies} from './mocks/films';
import {PageKind} from './consts';

const initialState = {
  genre: `All genres`,
  currentPage: PageKind.MAIN,
  currentMovieId: null,
  movies: mockMovies,
  genreMovies: mockMovies.slice(),
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MOVIE_DETAIL: `SHOW_MOVIE_DETAIL`,
  GET_GENRE_MOVIES: `GET_GENRE_MOVIES`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  showMovieDetail: (movieId) => ({
    type: ActionType.SHOW_MOVIE_DETAIL,
    payload: movieId === undefined ? null : movieId,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      let genreMovies;
      if (action.payload === `All genres`) {
        genreMovies = state.movies.slice();
      } else {
        genreMovies = state.movies.filter((movie) => movie.genre === action.payload);
      }

      return extend(state, {
        genre: action.payload,
        genreMovies
      });

    case ActionType.SHOW_MOVIE_DETAIL:
      const pageKind = action.payload === undefined || action.payload === null ? PageKind.MAIN : PageKind.MOVIE_PAGE;
      return extend(state, {
        currentPage: pageKind,
        currentMovieId: action.payload,
      });

    case ActionType.GET_GENRE_MOVIES:
      return state;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
