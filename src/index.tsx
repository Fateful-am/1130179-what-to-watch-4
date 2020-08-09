import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import reducer from './reducer/reducer';
import {Operation as DataOperation} from './reducer/data/data';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user';
import {createAPI} from './api';
import {wtwLocalStorage} from './utils/helpers';

const onUnauthorized = () => {
  const localStorageAuthStatus = wtwLocalStorage.getAuthStatus();
  if (localStorageAuthStatus === AuthorizationStatus.AUTH) {
    store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  }

  wtwLocalStorage.setAuthStatus(AuthorizationStatus.NO_AUTH);
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadPromo());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
