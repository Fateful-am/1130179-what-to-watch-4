import {reducer, ActionType, ActionCreator} from "./reducer.js";
import {PageKind, ALL_GENRES, MOVIE_LIKE_THIS_COUNT} from './consts';
import {TEST_DATA} from './utils/test-data';
import {extend} from './utils/helpers';

describe(`Reducer work correctly:`, () => {
  it(`reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual(TEST_DATA.initialStoreState);
  });

  it(`reducer should change genre to "Comedy"`, () => {
    expect(reducer(TEST_DATA.initialStoreState, ActionCreator.changeGenre(`Comedy`)))
      .toEqual(
          extend(TEST_DATA.initialStoreState, {
            genre: `Comedy`,
            genreMovies: TEST_DATA.comedyMovies,
          }));
  });

  it(`reducer should change genre to "All Genres"`, () => {
    expect(reducer(extend(TEST_DATA.initialStoreState, {
      genre: `Comedy`,
      genreMovies: TEST_DATA.comedyMovies,
    }), ActionCreator.changeGenre(ALL_GENRES)))
      .toEqual(TEST_DATA.initialStoreState);
  });

  it(`reducer should change genre to "All Genres" when value is undefined`, () => {
    expect(reducer(extend(TEST_DATA.initialStoreState, {
      genre: `Comedy`,
      genreMovies: TEST_DATA.comedyMovies,
    }), ActionCreator.changeGenre()))
      .toEqual(TEST_DATA.initialStoreState);
  });


  it(`reducer should set to currentMovieId value and genreMovies`, () => {
    expect(reducer(extend(TEST_DATA.initialStoreState, {
      genre: `Comedy`,
      genreMovies: TEST_DATA.initialStoreState.movies.filter((movie) => movie.genre === `Comedy`),
    }),
    ActionCreator.showMovieDetail(0)))
      .toEqual(extend(TEST_DATA.initialStoreState, {
        currentPage: PageKind.MOVIE_PAGE,
        genre: `Comedy`,
        currentMovieId: 0,
        renderedMovieCount: MOVIE_LIKE_THIS_COUNT,
        genreMovies: TEST_DATA.comedyMovies.filter((movie) => movie.id !== 0),
      }));
  });

  it(`reducer should set to InitialState when MovieId is undefined`, () => {
    expect(reducer(TEST_DATA.initialStoreState, ActionCreator.showMovieDetail()))
      .toEqual(TEST_DATA.initialStoreState);
  });
});


describe(`Action creators work correctly:`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    });
  });

  it(`Action creator for showing movie details returns correct action`, () => {
    expect(ActionCreator.showMovieDetail(0)).toEqual({
      type: ActionType.SHOW_MOVIE_DETAIL,
      payload: 0,
    });
  });
});
