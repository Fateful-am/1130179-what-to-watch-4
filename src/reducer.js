import {extend} from "./utils/helpers.js";
import {mockMovies} from './mocks/films';

const initialState = {
  genre: `All genres`,
  movies: mockMovies,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRE_MOVIES: `GET_GENRE_MOVIES`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.GET_GENRE_MOVIES:
      return state;
  }

  return state;
};

export {reducer, ActionType};
