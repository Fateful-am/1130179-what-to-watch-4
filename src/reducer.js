import {extend} from "./utils/helpers.js";
import {mockMovies} from './mocks/films';

const initialState = {
  genre: `All genres`,
  movies: mockMovies,
  genreMovies: mockMovies.slice(),
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRE_MOVIES: `GET_GENRE_MOVIES`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
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

    case ActionType.GET_GENRE_MOVIES:
      return state;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
