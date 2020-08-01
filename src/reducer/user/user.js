import {extend} from '../../utils/helpers';
import {ActionCreator as MovieActionCreator} from '../movie/movie';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USERDATA: `SET_USERDATA`,
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
  }
};

const convertToLocalUserData = (serverUserData) => {
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
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUserData(convertToLocalUserData(response.data)));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
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
        dispatch(MovieActionCreator.gotoMain());
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
