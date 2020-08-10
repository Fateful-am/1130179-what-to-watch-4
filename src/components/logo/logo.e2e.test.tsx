import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Logo from "./logo";

configure({adapter: new Adapter()});

it(`Click by Logo calls callback`, () => {
  const formSendPrevention = jest.fn();
  const wrapper = shallow(<Logo
    inFooter={true}
  >
  </Logo>);

  wrapper.find(`.logo__link`).simulate(`click`, {
    preventDefault: formSendPrevention,
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
