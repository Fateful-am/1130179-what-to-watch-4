import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Router} from 'react-router-dom';
import history from '../../history';
import {UserStatus} from './user-status';
import {AuthorizationStatus} from '../../reducer/user/user';

configure({
  adapter: new Adapter(),
});


describe(`Interactive with UserStatus component: `, () => {
  it(`should avatar button be pressed`, () => {
    const wrapper = mount(
        <Router history={history}>
          <UserStatus
            authorizationStatus={AuthorizationStatus.AUTH}
            avatarUrl={`/wtw/avatar.jpg`}
          />
        </Router>
    );

    const formSendPrevention = jest.fn();
    const avatar = wrapper.find(`.user-block__avatar`);

    avatar.simulate(`click`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`should link to sig-in be pressed`, () => {
    const wrapper = mount(
        <Router history={history}>
          <UserStatus
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            avatarUrl={`/wtw/avatar.jpg`}
          />
        </Router>
    );

    const formSendPrevention = jest.fn();
    const link = wrapper.find(`Link.user-block__link`);

    link.simulate(`click`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
