import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import SignIn from './sign-in';
import {extend} from '../../utils/helpers';
import {PageKind} from '../../consts';

const mockStore = configureStore([]);

it(`AuthScreen component render correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
      currentPage: PageKind.SIGN_IN,
    })
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <SignIn
            onSubmit={()=> {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
