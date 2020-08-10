import NameSpace from "../name-space";
import {wtwLocalStorage} from '../../utils/helpers';

const NAME_SPACE = NameSpace.USER;


export const getAuthorizationStatus = (state) => {
  const localStorageAuthStatus = wtwLocalStorage.getAuthStatus();
  return localStorageAuthStatus
    ? localStorageAuthStatus
    : state[NAME_SPACE].authorizationStatus;
};

export const getLoginErrorMessage = (state) => {
  return state[NAME_SPACE].loginErrorMessage;
};

export const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};
