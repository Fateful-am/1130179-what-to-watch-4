import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

describe(`Render App component:`, () => {
  it(`render default AppScreen`, () => {
    const store = mockStore({
      [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
