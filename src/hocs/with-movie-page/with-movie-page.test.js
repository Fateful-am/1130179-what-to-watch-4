import React from "react";
import renderer from "react-test-renderer";
import withMoviePage from './with-movie-page';
import {MoviePage} from '../../components/movie-page/movie-page';
import configureStore from "redux-mock-store";

import {MOVIES, TEST_DATA, testMovieCard} from '../../utils/test-data';
import {Provider} from 'react-redux';
import {extend} from '../../utils/helpers';
import {MOVIE_LIKE_THIS_COUNT} from '../../consts';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../reducer/user/user';
import {Router} from "react-router-dom";
import history from '../../history';


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


describe(`withMoviePage is rendered correctly:`, () => {
  it(` with "Overview" tab and AUTH`, () => {
    const MockComponent = () => {
      return (
        <Provider store={store}>
          <Router history={history}>
            <MoviePage
              authorizationStatus={AuthorizationStatus.AUTH}
              movie={testMovieCard}
              activeTab={`Overview`}
              onTabClick={() => {}}
              onAddReviewClick={() => {}}
              onLoadReviews={() => {}}
              onMovieLoad={() => {}}
              likeThisMovies={MOVIES.slice(0, 4)}
              match={{params: {id: `8`}}}
              movies={MOVIES}
            />
          </Router>
        </Provider>
      );
    };

    const MockComponentWrapped = withMoviePage(MockComponent);

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

  it(` with "Overview" tab and NO-AUTH`, () => {
    const MockComponent = () => {
      return (
        <Provider store={store}>
          <Router history={history}>
            <MoviePage
              authorizationStatus={AuthorizationStatus.AUTH}
              movie={testMovieCard}
              activeTab={`Overview`}
              onTabClick={() => {}}
              onAddReviewClick={() => {}}
              onLoadReviews={() => {}}
              onMovieLoad={() => {}}
              likeThisMovies={MOVIES.slice(0, 4)}
              match={{params: {id: `8`}}}
              movies={MOVIES}
            />
          </Router>
        </Provider>
      );
    };

    const MockComponentWrapped = withMoviePage(MockComponent);

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
