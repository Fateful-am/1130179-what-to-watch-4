import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import AddReview from './add-review';
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import {extend} from '../../utils/helpers';
import {AuthorizationStatus} from '../../reducer/user/user';
import history from '../../history';

const mockStore = configureStore([]);

it(`Render AddReview Page`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.USER]: extend(TEST_DATA.initialStoreUserState, {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {avatarUrl: `/wtw/test.jpg`}
    })
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <AddReview
              movie={TEST_DATA.promoMovie}
              onBreadcrumbsBackClick={()=>{}}
            >
            </AddReview>
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
