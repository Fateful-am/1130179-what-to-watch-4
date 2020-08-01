import {reducer, ActionType, ActionCreator} from "./movie.js";
import {PageKind, MOVIE_LIKE_THIS_COUNT, START_MOVIE_COUNT} from '../../consts';
import {TEST_DATA} from '../../utils/test-data';

describe(`Reducer work correctly:`, () => {
  it(`reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual(TEST_DATA.initialStoreMovieState);
  });

  it(`reducer should change genre to "Comedy"`, () => {
    expect(reducer({}, ActionCreator.changeGenre(`Comedy`)))
      .toEqual({
        genre: `Comedy`,
        renderedMovieCount: START_MOVIE_COUNT,
      });
  });


  it(`reducer should set to currentMovieId value - 1`, () => {
    expect(reducer({
      currentPage: PageKind.MAIN,
      currentMovieId: -1,
    }, ActionCreator.showMovieDetail(0)))
      .toEqual({
        previousPage: PageKind.MAIN,
        previousMovieId: -1,
        currentPage: PageKind.MOVIE_PAGE,
        currentMovieId: 0,
        renderedMovieCount: MOVIE_LIKE_THIS_COUNT,
      });
  });

  it(`reducer should set to currentMovieId value - 2`, () => {
    expect(reducer({
      currentPage: PageKind.MOVIE_PAGE,
      currentMovieId: 0,
    }, ActionCreator.showMovieDetail(4)))
      .toEqual({
        previousPage: PageKind.MOVIE_PAGE,
        previousMovieId: 0,
        currentPage: PageKind.MOVIE_PAGE,
        currentMovieId: 4,
        renderedMovieCount: MOVIE_LIKE_THIS_COUNT,
      });
  });


  it(`reducer should increment renderedMovieCount state`, () => {
    expect(reducer({renderedMovieCount: 8}, ActionCreator.showMoreMovies(8)))
      .toEqual({renderedMovieCount: 16});
  });

  it(`reducer should switch to Play mode from Main mode`, () => {
    expect(reducer({
      currentPage: PageKind.MAIN,
      currentMovieId: -1,
    }
    , ActionCreator.playMovie(8)))
      .toEqual({
        previousPage: PageKind.MAIN,
        previousMovieId: -1,
        currentPage: PageKind.PLAYER,
        currentMovieId: 8,
      });
  });

  it(`reducer should switch to Play mode from MoviePage mode`, () => {
    expect(reducer({
      currentPage: PageKind.MOVIE_PAGE,
      currentMovieId: 4,
    }
    , ActionCreator.playMovie(4)))
      .toEqual({
        previousPage: PageKind.MOVIE_PAGE,
        previousMovieId: 4,
        currentPage: PageKind.PLAYER,
        currentMovieId: 4,
      });
  });

  it(`reducer should switch to Main mode after play promo movie`, () => {
    expect(reducer({
      previousPage: PageKind.MAIN,
      previousMovieId: -1,
      currentPage: PageKind.PLAYER,
      currentMovieId: 8,
    }, ActionCreator.exitPlayer()))
      .toEqual({
        previousPage: PageKind.PLAYER,
        previousMovieId: 8,
        currentPage: PageKind.MAIN,
        currentMovieId: -1,
      });
  });

  it(`reducer should switch to MoviePage mode after play movie`, () => {
    expect(reducer({
      previousPage: PageKind.MOVIE_PAGE,
      previousMovieId: 5,
      currentPage: PageKind.PLAYER,
      currentMovieId: 5,
    }, ActionCreator.exitPlayer()))
      .toEqual({
        previousPage: PageKind.PLAYER,
        previousMovieId: 5,
        currentPage: PageKind.MOVIE_PAGE,
        currentMovieId: 5,
      });
  });

  it(`reducer should switch to Sign In mode`, () => {
    expect(reducer({
      currentPage: PageKind.MAIN,
    }, ActionCreator.signIn()))
      .toEqual({
        previousPage: PageKind.MAIN,
        currentPage: PageKind.SIGN_IN,
      });
  });

  it(`reducer should switch to MainPage`, () => {
    expect(reducer({
      currentPage: PageKind.SIGN_IN,
    }, ActionCreator.gotoMain()))
      .toEqual({
        previousPage: PageKind.SIGN_IN,
        currentPage: PageKind.MAIN,
      });
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
    expect(ActionCreator.showMoreMovies(8)).toEqual({
      type: ActionType.SHOW_MORE_MOVIES,
      payload: 16,
    });
  });

  it(`Action creator for play movie returns correct action`, () => {
    expect(ActionCreator.playMovie(4)).toEqual({
      type: ActionType.PLAY_MOVIE,
      payload: 4,
    });
  });

  it(`Action creator for exit player returns correct action`, () => {
    expect(ActionCreator.exitPlayer()).toEqual({
      type: ActionType.EXIT_PLAYER,
      payload: null,
    });
  });

  it(`Action creator for sign in returns correct action`, () => {
    expect(ActionCreator.signIn()).toEqual({
      type: ActionType.SIGN_IN,
      payload: null,
    });
  });

  it(`Action creator for Goto Main returns correct action`, () => {
    expect(ActionCreator.gotoMain()).toEqual({
      type: ActionType.GOTO_MAIN,
      payload: null,
    });
  });
});
