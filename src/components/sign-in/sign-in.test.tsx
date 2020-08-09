import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import SignIn from './sign-in';
import {Router} from "react-router-dom";
import history from '../../history';

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
              onSubmit={()=> {}}
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
