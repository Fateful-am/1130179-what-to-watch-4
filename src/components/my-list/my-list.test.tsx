import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {TEST_DATA} from '../../utils/test-data';
import MyList from './my-list';
import {Router} from 'react-router-dom';
import history from '../../history';
import {extend} from '../../utils/helpers';
import {AuthorizationStatus} from '../../reducer/user/user';


const mockStore = configureStore([]);

it(`Render MyList`, () => {
  const store = mockStore({
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
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
          <Router history={history}>
            <MyList/>
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
