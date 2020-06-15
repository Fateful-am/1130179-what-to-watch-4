import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all movie headers be pressed`, () => {
  const onSmallMovieHeaderClick = jest.fn();

  const mainScreen = shallow(
      <Main
        movieCard={
          {genre: `Drama`,
            title: `The Grand Budapest Hotel`,
            year: 2014}
        }
        smallMovieCards={[`Fantastic Beasts: The Crimes of Grindelwald`,
          `Bohemian Rhapsody`,
          `Macbeth`,
          `Aviator`
        ]}
        onSmallMovieHeaderClick={onSmallMovieHeaderClick}
      />
  );

  const movieHeaders = mainScreen.find(`.small-movie-card__title`);

  movieHeaders.forEach((movieHeader) => {
    movieHeader.props().onClick();
  });

  expect(onSmallMovieHeaderClick.mock.calls.length).toBe(movieHeaders.length);
});
