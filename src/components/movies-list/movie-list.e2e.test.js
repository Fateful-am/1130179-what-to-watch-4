import {TEST_DATA} from '../../utils/test-data';
import Enzyme, {mount} from 'enzyme';
import React from 'react';
import {MoviesList} from './movies-list';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Interactive with MovieList component: `, () => {
  const handleMovieCardClick = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
        <MoviesList
          renderMovies={TEST_DATA.initialStoreState.genreMovies.slice(0, TEST_DATA.initialStoreState.renderedMovieCount)}
          onMovieCardClick={handleMovieCardClick}
        />
    );
  });

  it(`should all movie cards be pressed`, () => {
    const formSendPrevention = jest.fn();
    const movieCards = wrapper.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`click`, {
        preventDefault: formSendPrevention,
      });
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(movieCards.length);
    expect(handleMovieCardClick).toHaveBeenCalledTimes(movieCards.length);
  });

});
