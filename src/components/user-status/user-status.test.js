import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import UserStatus from './user-status';
import {extend} from '../../utils/helpers';
import {AuthorizationStatus} from '../../reducer/user/user';

const mockStore = configureStore([]);

it(`Render UserStatus with NO_AUTH`, () => {
  const store = mockStore({
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <UserStatus />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render UserStatus with AUTH`, () => {
  const store = mockStore({
    [NameSpace.USER]: extend(TEST_DATA.initialStoreUserState, {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {
        avatarUrl: `/wtw/static/avatar/8.jpg`,
      }
    }),
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <UserStatus />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
