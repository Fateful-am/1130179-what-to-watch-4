import {extend} from "../../utils/helpers.js";
import {PageKind, ALL_GENRES, START_MOVIE_COUNT, MOVIE_LIKE_THIS_COUNT} from '../../consts';

const initialState = {
  genre: ALL_GENRES,
  currentPage: PageKind.MAIN,
  currentMovieId: -1,
  previousPage: PageKind.MAIN,
  previousMovieId: -1,
  renderedMovieCount: START_MOVIE_COUNT,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MOVIE_DETAIL: `SHOW_MOVIE_DETAIL`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  PLAY_MOVIE: `PLAY_MOVIE`,
  EXIT_PLAYER: `EXIT_PLAYER`,
  SIGN_IN: `SIGN_IN`,
  GOTO_MAIN: `GOTO_MAIN`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  showMovieDetail: (movieId) => ({
    type: ActionType.SHOW_MOVIE_DETAIL,
    payload: movieId,
  }),

  showMoreMovies: (renderedMovieCount) => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: renderedMovieCount + START_MOVIE_COUNT,
  }),

  playMovie: (movieIdForPlay) => ({
    type: ActionType.PLAY_MOVIE,
    payload: movieIdForPlay,
  }),

  exitPlayer: () => ({
    type: ActionType.EXIT_PLAYER,
    payload: null,
  }),

  signIn: () => ({
    type: ActionType.SIGN_IN,
    payload: null,
  }),

  gotoMain: () => ({
    type: ActionType.GOTO_MAIN,
    payload: null,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        renderedMovieCount: START_MOVIE_COUNT,
      });

    case ActionType.SHOW_MOVIE_DETAIL:
      return extend(state, {
        previousPage: state.currentPage,
        previousMovieId: state.currentMovieId,
        currentPage: PageKind.MOVIE_PAGE,
        currentMovieId: action.payload,
        renderedMovieCount: MOVIE_LIKE_THIS_COUNT,
      });

    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        renderedMovieCount: action.payload
      });

    case ActionType.PLAY_MOVIE:
      return extend(state, {
        previousPage: state.currentPage,
        previousMovieId: state.currentMovieId,
        currentPage: PageKind.PLAYER,
        currentMovieId: action.payload,
      });

    case ActionType.EXIT_PLAYER:
      return extend(state, {
        previousPage: state.currentPage,
        previousMovieId: state.currentMovieId,
        currentPage: state.previousPage,
        currentMovieId: state.previousMovieId,
      });

    case ActionType.SIGN_IN:
      return extend(state, {
        previousPage: state.currentPage,
        currentPage: PageKind.SIGN_IN,
      });

    case ActionType.GOTO_MAIN:
      return extend(state, {
        previousPage: state.currentPage,
        currentPage: PageKind.MAIN,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
