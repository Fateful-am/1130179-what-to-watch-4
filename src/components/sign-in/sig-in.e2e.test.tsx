import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Router} from 'react-router-dom';
import history from '../../history';
import {SignIn} from "./sign-in";

configure({
  adapter: new Adapter(),
});


describe(`Interactive with Sig-in component: `, () => {

  let wrapper;
  const onSubmit = jest.fn();

  beforeEach(() => {

    wrapper = mount(
        <Router history={history}>
          <SignIn
            authorizationStatus={`Auth`}
            loginErrorMessage={``}
            onSubmit={onSubmit}
          />
        </Router>
    );
  });

  it(`should Sign-in button be pressed`, () => {
    const formSendPrevention = jest.fn();
    const form = wrapper.find(`.sign-in__form`);

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
