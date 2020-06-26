import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});
const movieCardId = 0;

it(`Should movie card clicked`, () => {
  const movieCardClick = jest.fn();

  const movieCardScreen = mount(
      <MovieCard
        id={movieCardId}
        title={`Macbeth`}
        previewSource={`img/macbeth.jpg`}
        previewMovie={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
        onClick={movieCardClick}
      />
  );

  const movieCard = movieCardScreen.find(`.small-movie-card`);
  const formSendPrevention = jest.fn();

  movieCard.simulate(`click`, {
    preventDefault: formSendPrevention
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(1);
  expect(movieCardClick).toHaveBeenCalledTimes(1);

});
