import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from './main.jsx';
import {TEST_DATA} from '../../utils/test-data';
import {extend} from '../../utils/helpers';

const mockStore = configureStore([]);

describe(`Render Main component: `, () => {
  it(`"All genres" MainScreen`, () => {
    const store = mockStore(TEST_DATA.initialStoreMovieState);

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`"Comedy" MainScreen`, () => {
    const store = mockStore(extend(TEST_DATA.initialStoreMovieState, {
      genre: `Comedy`,
      genreMovies: TEST_DATA.comedyMovies
    }));

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`"Drama" MainScreen`, () => {
    const store = mockStore(extend(TEST_DATA.initialStoreMovieState, {
      genre: `Drama`,
      genreMovies: TEST_DATA.dramaMovies
    }));

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
