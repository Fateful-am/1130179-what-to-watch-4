import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {TEST_DATA} from '../../utils/test-data';
import MovieCardButtons from './movie-card-buttons';
import NameSpace from '../../reducer/name-space';
import {Router} from 'react-router-dom';
import history from '../../history';

const mockStore = configureStore([]);

it(`Render MovieCardButtons`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieCardButtons movieId={8}/>
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

it(`Render MovieCardButtons with AddReviewButton`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieCardButtons movieId={8}>
              <a href="#" className="btn movie-card__button">Add review</a>
            </MovieCardButtons>
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
