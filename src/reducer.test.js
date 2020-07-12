import {reducer, ActionType, ActionCreator} from "./reducer.js";
import {PageKind, ALL_GENRES, MOVIE_LIKE_THIS_COUNT, START_MOVIE_COUNT} from './consts';
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

  it(`reducer should increment renderedMovieCount state`, () => {
    expect(reducer(TEST_DATA.initialStoreState, ActionCreator.showMoreMovies()))
      .toEqual(extend(TEST_DATA.initialStoreState, {
        renderedMovieCount: 16,
      }));
  });

  it(`reducer should switch to Play mode from Main mode`, () => {
    expect(reducer(TEST_DATA.initialStoreState, ActionCreator.playMovie()))
      .toEqual(extend(TEST_DATA.initialStoreState, {
        currentPage: PageKind.PLAYER,
        currentMovieId: TEST_DATA.initialStoreState.promoMovieId,
      }));
  });

  it(`reducer should switch to Play mode from MoviePage mode`, () => {
    expect(reducer(extend(TEST_DATA.initialStoreState, {
      currentPage: PageKind.MOVIE_PAGE,
      currentMovieId: 0,
    }), ActionCreator.playMovie()))
      .toEqual(extend(TEST_DATA.initialStoreState, {
        currentPage: PageKind.PLAYER,
        currentMovieId: 0,
      }));
  });

  it(`reducer should switch to Main mode after play promo movie`, () => {
    expect(reducer(extend(TEST_DATA.initialStoreState, {
      currentPage: PageKind.PLAYER,
      currentMovieId: 8,
      promoMovieId: 8,
    }), ActionCreator.exitPlayer()))
      .toEqual(TEST_DATA.initialStoreState);
  });

  it(`reducer should switch to MoviePage mode after play movie`, () => {
    expect(reducer(extend(TEST_DATA.initialStoreState, {
      currentPage: PageKind.PLAYER,
      currentMovieId: 0,
      promoMovieId: 8,
    }), ActionCreator.exitPlayer()))
      .toEqual(extend(TEST_DATA.initialStoreState, {
        currentPage: PageKind.MOVIE_PAGE,
        currentMovieId: 0,
      }));
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

  it(`Action creator for showing more movies returns correct action`, () => {
    expect(ActionCreator.showMoreMovies()).toEqual({
      type: ActionType.SHOW_MORE_MOVIES,
      payload: START_MOVIE_COUNT,
    });
  });

  it(`Action creator for play movie returns correct action`, () => {
    expect(ActionCreator.playMovie()).toEqual({
      type: ActionType.PLAY_MOVIE,
      payload: null,
    });
  });

  it(`Action creator for exit player returns correct action`, () => {
    expect(ActionCreator.exitPlayer()).toEqual({
      type: ActionType.EXIT_PLAYER,
      payload: null,
    });
  });
});
