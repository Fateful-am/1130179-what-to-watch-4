import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});
const movieCardId = 0;

it(`Should movie card mouse entered`, () => {
  const movieCardMouseEnter = jest.fn();

  const movieCardScreen = shallow(
      <MovieCard
        onMouseEnter={movieCardMouseEnter}
        id={movieCardId}
        title={`Macbeth`}
        posterSource={`img/macbeth.jpg`}
        onTitleClick={() => {
        }}
      />
  );

  const movieCard = movieCardScreen.find(`.small-movie-card`);
  const formSendPrevention = jest.fn();

  movieCard.simulate(`mouseenter`, {
    preventDefault: formSendPrevention
  });

  expect(movieCardMouseEnter).toHaveBeenCalledTimes(1);

});
