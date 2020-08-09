import {reducer, ActionType, ActionCreator} from "./movie";
import {TEST_DATA} from '../../utils/test-data';
import {START_MOVIE_COUNT} from '../../consts';

describe(`Reducer work correctly:`, () => {
  it(`reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual(TEST_DATA.initialStoreMovieState);
  });

  it(`reducer should change movieGenre to "Comedy"`, () => {
    expect(reducer({}, ActionCreator.changeMovieGenre(`Comedy`)))
      .toEqual({
        movieGenre: `Comedy`,
      });
  });

  it(`reducer should increment renderedMovieCount state`, () => {
    expect(reducer({mainPageMovieCardCount: 8}, ActionCreator.showMoreMovies(8)))
      .toEqual({mainPageMovieCardCount: 16});
  });

  it(`reducer should change mainPageGenre to "Comedy"`, () => {
    expect(reducer({}, ActionCreator.changeMainPageGenre(`Comedy`)))
      .toEqual({
        mainPageGenre: `Comedy`,
        mainPageMovieCardCount: START_MOVIE_COUNT,
      });
  });
});


describe(`Action creators work correctly:`, () => {
  it(`Action creator for changing movieGenre returns correct action`, () => {
    expect(ActionCreator.changeMovieGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_MOVIE_GENRE,
      payload: `Comedy`,
    });
  });

  it(`Action creator for showing more movies returns correct action`, () => {
    expect(ActionCreator.showMoreMovies(8)).toEqual({
      type: ActionType.SHOW_MORE_MOVIES,
      payload: 16,
    });
  });

  it(`Action creator for changing mainPageGenre returns correct action`, () => {
    expect(ActionCreator.changeMainPageGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_MAIN_PAGE_GENRE,
      payload: `Comedy`,
    });
  });
});
