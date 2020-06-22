import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});
const movieCardId = 0;

it(`Should movie card mouse entered`, () => {
  const movieCardHover = jest.fn();
  const movieCardClick = jest.fn();

  const movieCardScreen = shallow(
      <MovieCard
        onHover={movieCardHover}
        id={movieCardId}
        title={`Macbeth`}
        previewSource={`img/macbeth.jpg`}
        onClick={movieCardClick}
      />
  );

  const movieCard = movieCardScreen.find(`.small-movie-card`);
  const formSendPrevention = jest.fn();

  movieCard.simulate(`mouseenter`, {
    preventDefault: formSendPrevention
  });

  movieCard.simulate(`click`, {
    preventDefault: formSendPrevention
  });

  expect(movieCardHover).toHaveBeenCalledTimes(1);
  expect(movieCardClick).toHaveBeenCalledTimes(1);

});
