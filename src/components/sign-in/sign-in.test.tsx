import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import SignIn from './sign-in';
import {Router} from 'react-router-dom';
import history from '../../history';
import {noop} from '../../utils/helpers';
import {extend} from '../../utils/helpers';

const mockStore = configureStore([]);

it(`AuthScreen component render correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              onSubmit={noop}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`AuthScreen component render correctly with error`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.USER]: extend(TEST_DATA.initialStoreUserState, {
      loginErrorMessage: `Some error`,
    }),
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              onSubmit={noop}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
