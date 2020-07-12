import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';
import {testMovieCard} from '../../utils/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card clicked`, () => {
  const movieCardClick = jest.fn();

  const movieCardScreen = mount(
      <MovieCard
        id={testMovieCard.id}
        title={testMovieCard.title}
        genre={testMovieCard.genre}
        previewImage={testMovieCard.previewImage}
        previewVideoLink={testMovieCard.previewVideoLink}
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
