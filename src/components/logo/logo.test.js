import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import Logo from './logo';
import {extend} from '../../utils/helpers';
import {PageKind} from '../../consts';

const mockStore = configureStore([]);

it(`Render logo on Main Page on header`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Logo
            inFooter={false}
          >
          </Logo>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render logo on Main Page on footer`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Logo
            inFooter={true}
          >
          </Logo>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render logo on Movie Page on header`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
      currentPage: PageKind.MOVIE_PAGE,
    })
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Logo
            inFooter={false}
          >
          </Logo>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render logo on Movie Page on footer`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
      currentPage: PageKind.MOVIE_PAGE,
    })
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Logo
            inFooter={true}
          >
          </Logo>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
