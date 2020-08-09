import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MoviesList from './movies-list';
import {MOVIES, TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import {Router} from "react-router-dom";
import history from '../../history';

const mockStore = configureStore([]);

it(`Render Movies List`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MoviesList renderedMovies={MOVIES.slice(0, 4)} />
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
