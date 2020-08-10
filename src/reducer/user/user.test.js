import {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation} from './user';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';

const api = createAPI(() => {});
describe(`Data-reducer for user work correctly:`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: {},
      loginErrorMessage: ``,
    });
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should change user data`, () => {
    expect(reducer({
      userData: {}
    }, {
      type: ActionType.SET_USERDATA,
      payload: {
        id: 1,
        email: `test@test.com`,
        name: `User name`,
        avatarUrl: `/wtw/image.jpg`,
      }
    })).toEqual({
      userData: {
        id: 1,
        email: `test@test.com`,
        name: `User name`,
        avatarUrl: `/wtw/image.jpg`,
      },
    });
  });

  it(`Reducer should change loginErrorMessage`, () => {
    expect(reducer({
      loginErrorMessage: ``,
    }, {
      type: ActionType.SET_LOGIN_ERROR_MESSAGE,
      payload: `someError`,
    })).toEqual({
      loginErrorMessage: `someError`,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for set userData returns correct action`, () => {
    expect(ActionCreator.setUserData({some: `data`})).toEqual({
      type: ActionType.SET_USERDATA,
      payload: {some: `data`},
    });
  });

  it(`Action creator for set loginErrorMessage returns correct action`, () => {
    expect(ActionCreator.setLoginErrorMessage(`someError`)).toEqual({
      type: ActionType.SET_LOGIN_ERROR_MESSAGE,
      payload: `someError`,
    });
  });

});

describe(`User operation work correctly`, () => {
  it(`Should make a correct API call to GET /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginChecker = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        [`avatar_url`]: `img/1.png`
      });

    return loginChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USERDATA,
          payload: {
            id: 1,
            email: `Oliver.conner@gmail.com`,
            name: `Oliver.conner`,
            avatarUrl: `img/1.png`,
          },
        });
      });
  });

  it(`Should make a correct API call to POST /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginChecker = Operation.login({
      email: `email@dot.com`,
      password: `password`,
    });

    apiMock
      .onPost(`/login`)
      .reply(200, {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        [`avatar_url`]: `img/1.png`
      });

    return loginChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USERDATA,
          payload: {
            id: 1,
            email: `Oliver.conner@gmail.com`,
            name: `Oliver.conner`,
            avatarUrl: `img/1.png`,
          },
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_LOGIN_ERROR_MESSAGE,
          payload: ``,
        });
      });
  });

  it(`Should make a correct API catch to POST /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginChecker = Operation.login({
      email: ``,
      password: `password`,
    });

    apiMock
      .onPost(`/login`)
      .reply(400, {
        error: `someError`,
      });

    return loginChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOGIN_ERROR_MESSAGE,
          payload: `someError`,
        });
      });
  });

});
