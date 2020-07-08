import {extend} from "./utils/helpers.js";
import {mockMovies} from './mocks/films';
import {PageKind, ALL_GENRES, PROMO_MOCK_INDEX, START_MOVIE_COUNT, MOVIE_LIKE_THIS_COUNT} from './consts';

const initialState = {
  genre: ALL_GENRES,
  currentPage: PageKind.MAIN,
  currentMovieId: null,
  promoMovieId: PROMO_MOCK_INDEX,
  movies: mockMovies,
  genreMovies: [...mockMovies],
  renderedMovieCount: START_MOVIE_COUNT,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MOVIE_DETAIL: `SHOW_MOVIE_DETAIL`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  PLAY_MOVIE: `PLAY_MOVIE`,
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

  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: START_MOVIE_COUNT,
  }),

  playMovie: () => ({
    type: ActionType.PLAY_MOVIE,
    payload: null,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      let genreMovies;
      let genre;
      if (action.payload === ALL_GENRES || !action.payload) {
        genreMovies = [...state.movies];
        genre = ALL_GENRES;
      } else {
        genreMovies = state.movies.filter((movie) => movie.genre === action.payload);
        genre = action.payload;
      }

      return extend(state, {
        genre,
        renderedMovieCount: START_MOVIE_COUNT,
        genreMovies
      });

    case ActionType.SHOW_MOVIE_DETAIL:
      const pageKind = action.payload === undefined || action.payload === null ? PageKind.MAIN : PageKind.MOVIE_PAGE;
      const renderedMovieCount = pageKind === PageKind.MAIN ? START_MOVIE_COUNT : MOVIE_LIKE_THIS_COUNT;
      return extend(state, {
        currentPage: pageKind,
        currentMovieId: action.payload,
        genreMovies: state.genreMovies.filter((movie) => movie.id !== action.payload),
        renderedMovieCount
      });

    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        renderedMovieCount: state.renderedMovieCount + action.payload
      });

    case ActionType.PLAY_MOVIE:
      return extend(state, {
        currentPage: PageKind.PLAYER,
        currentMovieId: state.currentMovieId === 0 || state.currentMovieId ? state.currentMovieId : state.promoMovieId,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
