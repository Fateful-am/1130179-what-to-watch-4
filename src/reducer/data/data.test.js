import {MOVIES} from '../../utils/test-data';
import {reducer, ActionType} from './data';

describe(`Data-reducer work correctly:`, () => {
  it(`reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        promoMovieId: null,
        movies: [],
      });
  });

  it(`Reducer should update movies by load movies`, () => {
    expect(reducer({
      movies: [],
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: MOVIES,
    })).toEqual({
      movies: MOVIES,
    });
  });


  it(`Reducer should update promoMovieId by load promoMovie`, () => {
    expect(reducer({
      promoMovieId: null,
      movies: [],
    }, {
      type: ActionType.LOAD_PROMO,
      payload: MOVIES[8],
    })).toEqual({
      promoMovieId: 8,
      movies: [],
    });
  });
});
