import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MoviePage from './movie-page';
import {TEST_DATA} from '../../utils/test-data';
import {extend} from '../../utils/helpers';

const mockStore = configureStore([]);

it(`Render MoviePage with Overview tab`, () => {
  const testMovieId = 0;
  const store = mockStore(extend(TEST_DATA.initialStoreMovieState, {
    currentMovieId: testMovieId,
    genreMovies: TEST_DATA.comedyMovies.filter((movie) => movie.id !== testMovieId),
  }));

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
