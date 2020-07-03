import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app.jsx';
import {TEST_DATA} from '../../utils/test-data';

const mockStore = configureStore([]);

describe(`Render App component:`, () => {
  it(`render default AppScreen`, () => {
    const store = mockStore(TEST_DATA.initialStoreState);

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
