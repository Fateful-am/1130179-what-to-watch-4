import {MOVIES} from '../../utils/test-data';
import {reducer, ActionType, ActionCreator} from './data';

describe(`Data-reducer work correctly:`, () => {
  it(`reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        promoMovieId: -1,
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
      promoMovieId: -1,
    }, {
      type: ActionType.LOAD_PROMO,
      payload: MOVIES[8],
    })).toEqual({
      promoMovieId: 8,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`ActionCreator for load movies returns correct action`, ()=>{
    expect(ActionCreator.loadMovies(MOVIES)).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: MOVIES,
    });
  });

  it(`ActionCreator for load promo returns correct action`, ()=>{
    expect(ActionCreator.loadPromo(MOVIES[8])).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: MOVIES[8],
    });
  });
});
