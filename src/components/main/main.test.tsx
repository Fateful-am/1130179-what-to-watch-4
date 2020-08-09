import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from './main.tsx';
import {TEST_DATA} from '../../utils/test-data';
import {extend} from '../../utils/helpers';
import NameSpace from '../../reducer/name-space';
import {Router} from "react-router-dom";
import history from '../../history';

const mockStore = configureStore([]);

describe(`Render Main component: `, () => {
  it(`"All genres" MainScreen`, () => {
    const store = mockStore({
      [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Main />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`"Comedy" MainScreen`, () => {
    const store = mockStore({
      [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
        mainPageGenre: `Comedy`,
      }),
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Main />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`"Drama" MainScreen`, () => {
    const store = mockStore({
      [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
        mainPageGenre: `Drama`,
      }),
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Main />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
