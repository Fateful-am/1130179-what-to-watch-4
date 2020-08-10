import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import AddReview from './add-review';
import {MOVIES} from '../../utils/test-data';

configure({adapter: new Adapter()});

it(`Click by Breadcrumbs calls callback`, () => {
  const formSendPrevention = jest.fn();
  const wrapper = shallow(<AddReview
    movie={MOVIES[0]}
  >
  </AddReview>);

  wrapper.find(`Link.breadcrumbs__link`).simulate(`click`, {
    preventDefault: formSendPrevention,
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
