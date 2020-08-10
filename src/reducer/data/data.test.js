import {MOVIES} from '../../utils/test-data';
import {reducer, ActionType, ActionCreator, Operation, convertToLocalMovieData, convertToLocalReviews} from './data';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from "../../api";

const api = createAPI(() => {});

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

  it(`Reducer should update comments for movie by load comments`, () => {
    expect(reducer({
      movies: [
        {
          id: 0,
          reviews: [],
        },
        {
          id: 1,
          reviews: [],
        },
      ],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: {
        movieId: 0,
        comments: [{
          comment: `test`,
        }]
      },
    })).toEqual({
      movies: [
        {
          id: 0,
          reviews: [{
            comment: `test`,
          }],
        },
        {
          id: 1,
          reviews: [],
        }
      ],
    });
  });

  it(`Reducer should update isFavorite by load movies status`, () => {
    expect(reducer({
      movies: [
        {
          id: 1,
          isFavorite: false,
        },
        {
          id: 2,
          isFavorite: false,
        },
        {
          id: 3,
          isFavorite: false,
        }
      ],
    }, {
      type: ActionType.SET_MOVIE_STATUS,
      payload: [
        {
          movieId: 1,
          status: true,
        },
        {
          movieId: 3,
          status: true,
        },
      ],
    })).toEqual({
      movies: [
        {
          id: 1,
          isFavorite: true,
        },
        {
          id: 2,
          isFavorite: false,
        },
        {
          id: 3,
          isFavorite: true,
        },
      ],
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

  it(`ActionCreator for load comments returns correct action`, ()=>{
    expect(ActionCreator.loadComments({test: `testData`})).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: {test: `testData`},
    });
  });
});

describe(`Data operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();
    const response = [
      {starring: [`Black`], rating: 1},
      {starring: [`Black`], rating: 4},
      {starring: [`Black`], rating: 7},
      {starring: [`Black`], rating: 9},
    ];
    const payload = response.map((movieObject) => {
      return convertToLocalMovieData(movieObject);
    });

    apiMock
      .onGet(`/films`)
      .reply(200, response);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = Operation.loadPromo();
    const request = {id: 1, starring: []};

    apiMock
      .onGet(`/films/promo`)
      .reply(200, request);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: convertToLocalMovieData(request),
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = Operation.loadReviews(1);
    const response = [
      {
        comment: `comment`,
        user: {name: `userName`},
        date: `2019-05-08T14:13:56.569Z`,
        rating: 9,
      }
    ];

    apiMock
      .onGet(`/comments/1`)
      .reply(200, response);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: {
            movieId: 1,
            comments: convertToLocalReviews(response)
          },
        });
      });
  });

  it(`Should make a correct API call to POST /comments/:film_id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addReviewer = Operation.addReview({
      movieId: 1,
      rating: 8,
      comment: `testComment`
    });

    const response = [{
      comment: `testComment`,
      date: `2019-05-08T14:13:56.569Z`,
      rating: 8,
      user: {name: `fake`},
    }];

    apiMock
      .onPost(`/comments/1`)
      .reply(200, response);

    return addReviewer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: {
            movieId: 1,
            comments: convertToLocalReviews(response),
          },
        });
      });
  });

  it(`Should make a correct API call to POST /favorite/:film_id/:status`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addReviewer = Operation.changeMovieStatus(1, 1);

    const response = {
      id: 1,
      [`is_favorite`]: true,
    };

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, response);

    return addReviewer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_MOVIE_STATUS,
          payload: [{
            movieId: 1,
            status: true,
          }],
        });
      });
  });

  it(`Should make a correct API call to POST /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addReviewer = Operation.loadFavorites();

    const response = [
      {
        id: 1,
        [`is_favorite`]: true,
      },
      {
        id: 2,
        [`is_favorite`]: false,
      },
    ];

    apiMock
      .onGet(`/favorite`)
      .reply(200, response);

    return addReviewer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_MOVIE_STATUS,
          payload: [
            {
              movieId: 1,
              status: true,
            },
            {
              movieId: 2,
              status: false,
            },
          ],
        });
      });
  });
});

describe(`Check getRatingLevel for work correctly`, () => {
  it(`return Bad Status`, () => {

  });
});
