import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MoviesList from './movies-list';
import {TEST_DATA} from '../../utils/test-data';

const mockStore = configureStore([]);

it(`Render Movies List`, () => {
  const store = mockStore(TEST_DATA.initialStoreMovieState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviesList />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
