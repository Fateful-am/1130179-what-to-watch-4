import React from "react";
import renderer from "react-test-renderer";
import withMoviePage from './with-movie-page';
import {MoviePage} from '../../components/movie-page/movie-page';
import configureStore from "redux-mock-store";

import {TEST_DATA, testMovieCard} from '../../utils/test-data';
import {Provider} from 'react-redux';
import {extend} from '../../utils/helpers';
import {MOVIE_LIKE_THIS_COUNT} from '../../consts';

const mockStore = configureStore([]);

const store = mockStore(extend(TEST_DATA.initialStoreMovieState, {
  genre: `Comedy`,
  currentPage: `moviePage`,
  currentMovieId: 1,
  genreMovies: TEST_DATA.comedyMovies.filter((movie) => movie.id !== 0),
  renderedMovieCount: MOVIE_LIKE_THIS_COUNT
}));

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
