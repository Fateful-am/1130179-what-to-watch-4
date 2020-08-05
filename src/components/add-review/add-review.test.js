import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import AddReview from './add-review';
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import {extend} from '../../utils/helpers';
import {AuthorizationStatus} from '../../reducer/user/user';

const mockStore = configureStore([]);

it(`Render AddReview Page`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.USER]: extend(TEST_DATA.initialStoreUserState, {
      authorizationStatus: AuthorizationStatus.AUTH,
    })
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <AddReview
            movie={TEST_DATA.promoMovie}
            onBreadcrumbsBackClick={()=>{}}
          >
          </AddReview>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
