import {extend} from "../../utils/helpers.js";
import {ALL_GENRES, START_MOVIE_COUNT} from '../../consts';

const initialState = {
  movieGenre: ALL_GENRES,
  mainPageGenre: ALL_GENRES,
  mainPageMovieCardCount: START_MOVIE_COUNT,
};

const ActionType = {
  CHANGE_MOVIE_GENRE: `CHANGE_MOVIE_GENRE`,
  CHANGE_MAIN_PAGE_GENRE: `CHANGE_MAIN_PAGE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
};

const ActionCreator = {
  changeMovieGenre: (genre) => ({
    type: ActionType.CHANGE_MOVIE_GENRE,
    payload: genre,
  }),

  changeMainPageGenre: (genre) => ({
    type: ActionType.CHANGE_MAIN_PAGE_GENRE,
    payload: genre,
  }),

  showMoreMovies: (renderedMovieCount) => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: renderedMovieCount + START_MOVIE_COUNT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MOVIE_GENRE:
      return extend(state, {
        movieGenre: action.payload,
      });

    case ActionType.CHANGE_MAIN_PAGE_GENRE:
      return extend(state, {
        mainPageGenre: action.payload,
        mainPageMovieCardCount: START_MOVIE_COUNT,
      });

    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        mainPageMovieCardCount: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
