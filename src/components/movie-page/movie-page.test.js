import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MoviePage from './movie-page';
import {TEST_DATA} from '../../utils/test-data';
import {extend} from '../../utils/helpers';
import NameSpace from '../../reducer/name-space';
import {PageKind} from '../../consts';

const mockStore = configureStore([]);

it(`Render MoviePage with Overview tab`, () => {
  const testMovieId = 0;
  const store = mockStore({
    [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
      currentPage: PageKind.MOVIE_PAGE,
      genre: `Comedy`,
      currentMovieId: testMovieId,
    }),
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            activeTab={`Overview`}
            onTabClick={()=>{}}
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
