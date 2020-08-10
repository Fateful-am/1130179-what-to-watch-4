import {extend, wtwLocalStorage} from '../../utils/helpers';
import history from '../../history';
import {Operation as DataOperation} from '../../reducer/data/data';


const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  loginErrorMessage: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USERDATA: `SET_USERDATA`,
  SET_LOGIN_ERROR_MESSAGE: `SET_LOGIN_ERROR_MESSAGE`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setUserData: (userData) => {
    return {
      type: ActionType.SET_USERDATA,
      payload: userData,
    };
  },

  setLoginErrorMessage: (errorMessage) => {
    return {
      type: ActionType.SET_LOGIN_ERROR_MESSAGE,
      payload: errorMessage,
    };
  },
};

export const convertToLocalUserData = (serverUserData) => {
  if (serverUserData) {
    return {
      id: serverUserData[`id`],
      email: serverUserData[`email`],
      name: serverUserData[`name`],
      avatarUrl: serverUserData[`avatar_url`],
    };
  }
  return {
    userData: {}
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USERDATA:
      return extend(state, {
        userData: action.payload,
      });

    case ActionType.SET_LOGIN_ERROR_MESSAGE:
      return extend(state, {
        loginErrorMessage: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(convertToLocalUserData(response.data)));
        wtwLocalStorage.setAuthStatus(AuthorizationStatus.AUTH);
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setUserData(convertToLocalUserData(response.data)));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        wtwLocalStorage.setAuthStatus(AuthorizationStatus.AUTH);
        dispatch(ActionCreator.setLoginErrorMessage(``));
        dispatch(DataOperation.loadFavorites());
        history.push(wtwLocalStorage.getLastUrl());
      })
      .catch((err) => {
        dispatch(ActionCreator.setLoginErrorMessage(err.response.data.error));
      });
  },
};

export {
  AuthorizationStatus,
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
