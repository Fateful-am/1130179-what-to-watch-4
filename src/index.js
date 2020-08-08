import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {createAPI} from './api.js';
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
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
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
