import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {TEST_DATA} from '../../utils/test-data';
import {Router} from 'react-router-dom';
import MovieCardButtons from './movie-card-buttons';
import history from '../../history';

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Interactive with Buttons component: `, () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,

    });
    wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <MovieCardButtons
              movieStatus={1}
            />
          </Router>
        </Provider>);
  });

  it(`should My list button be pressed`, () => {
    const formSendPrevention = jest.fn();
    const showMoreButton = wrapper.find(`.btn--list`);

    showMoreButton.simulate(`click`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`should My play button be pressed`, () => {
    const formSendPrevention = jest.fn();
    const showMoreButton = wrapper.find(`Link.btn--play`);

    showMoreButton.simulate(`click`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
