import {extend} from '../../utils/helpers.js';
import {mockMovies} from '../../mocks/films';

const initialState = {
  promoMovieId: 8,
  movies: mockMovies,
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadPromo: (movie) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: movie,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoMovieId: action.payload.id,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
