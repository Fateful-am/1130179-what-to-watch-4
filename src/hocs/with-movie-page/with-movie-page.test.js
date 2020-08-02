import React from "react";
import renderer from "react-test-renderer";
import withMoviePage from './with-movie-page';
import {MoviePage} from '../../components/movie-page/movie-page';
import configureStore from "redux-mock-store";

import {TEST_DATA, testMovieCard} from '../../utils/test-data';
import {Provider} from 'react-redux';
import {extend} from '../../utils/helpers';
import {MOVIE_LIKE_THIS_COUNT} from '../../consts';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
    genre: `Comedy`,
    currentPage: `moviePage`,
    currentMovieId: 0,
    renderedMovieCount: MOVIE_LIKE_THIS_COUNT
  }),
  [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
  [NameSpace.USER]: TEST_DATA.initialStoreUserState,
});

const MockComponent = () => {
  return (
    <Provider store={store}>
      <MoviePage
        movie={testMovieCard}
        activeTab={`Overview`}
        onTabClick={() => {}}
      />
    </Provider>
  );
};

const MockComponentWrapped = withMoviePage(MockComponent);

describe(`withMoviePage is rendered correctly:`, () => {
  it(` with "Overview" tab`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        setDefaultTab={() => {}}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
