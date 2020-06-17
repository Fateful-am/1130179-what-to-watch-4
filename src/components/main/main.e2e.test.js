import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all movie headers be pressed and movie card mouse entered`, () => {
  const mainScreen = mount(
      <Main
        promoMovie={
          {
            genre: `Drama`,
            title: `The Grand Budapest Hotel`,
            posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
            year: 2014
          }
        }
        movies={[{
          id: 4,
          title: `Moonrise Kingdom`,
          imageSource: `img/moonrise-kingdom.jpg`
        },
        {
          id: 5,
          title: `Seven Years in Tibet`,
          imageSource: `img/seven-years-in-tibet.jpg`
        },
        {
          id: 6,
          title: `Midnight Special`,
          imageSource: `img/midnight-special.jpg`
        },
        {
          id: 7,
          title: `War of the Worlds`,
          imageSource: `img/war-of-the-worlds.jpg`
        },
        ]}
      />
  );

  const formSendPrevention1 = jest.fn();
  const movieHeaders = mainScreen.find(`.small-movie-card__title`);

  movieHeaders.forEach((movieHeader) => {
    movieHeader.simulate(`click`, {
      preventDefault: formSendPrevention1,
    });
  });

  expect(formSendPrevention1).toHaveBeenCalledTimes(movieHeaders.length);

  const formSendPrevention2 = jest.fn();
  const movieCards = mainScreen.find(`.small-movie-card`);

  movieCards.forEach((movieCard) => {
    movieCard.simulate(`mouseenter`, {
      preventDefault: formSendPrevention2,
    });
  });

  expect(formSendPrevention2).toHaveBeenCalledTimes(movieHeaders.length);
});
