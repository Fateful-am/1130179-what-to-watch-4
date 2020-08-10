import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

configure({adapter: new Adapter()});

it(`Click by Logo calls callback`, () => {
  const formSendPrevention = jest.fn();
  const wrapper = shallow(<MovieCard
    movieId={1}
    title={`title`}
    previewImage={`previewImage`}
    previewVideoLink={`previewVideoLink`}
  >
  </MovieCard>);

  wrapper.find(`.catalog__movies-card`).simulate(`click`, {
    preventDefault: formSendPrevention,
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
