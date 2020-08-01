import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {TEST_DATA} from '../../utils/test-data';
import MovieCardButtons from './movie-card-buttons';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

it(`Render MovieCardButtons`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCardButtons />
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
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCardButtons>
            <a href="#" className="btn movie-card__button">Add review</a>
          </MovieCardButtons>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
