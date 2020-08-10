import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {TEST_DATA} from '../../utils/test-data';
import {Router} from 'react-router-dom';
import history from '../../history';
import SignIn from "./sign-in";

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Interactive with Sig-in component: `, () => {
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
            <SignIn
            />
          </Router>
        </Provider>);
  });

  it(`should Sign-in button be pressed`, () => {
    const formSendPrevention = jest.fn();
    const form = wrapper.find(`.sign-in__form`);

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
