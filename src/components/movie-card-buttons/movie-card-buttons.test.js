import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {TEST_DATA} from '../../utils/test-data';
import MovieCardButtons from './movie-card-buttons';

const mockStore = configureStore([]);

it(`Render Movies List`, () => {
  const store = mockStore(TEST_DATA.initialStoreState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCardButtons
            onMyListClick={() => {}}
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
