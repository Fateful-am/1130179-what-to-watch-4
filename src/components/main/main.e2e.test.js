import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all movie cards be pressed and movie card mouse entered`, () => {
  const handleMovieCardClick = jest.fn();
  const mainScreen = mount(
      <Main
        promoMovie={
          {
            id: 8,
            title: `The Grand Budapest Hotel`,
            genre: `Drama`,
            year: 2014,
            posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
            coverSource: `img/bg-the-grand-budapest-hotel.jpg`,
            previewSource: `img/macbeth.jpg`,
            rating: {
              score: `8,9`,
              level: `Very good`,
              count: 240,
            },
            descriptions: [
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
            ],
            director: `Wes Andreson`,
            starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
            runTime: `1h 39m`,
            reviews: [
              {
                text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
                author: `Kate Muir`,
                date: `December 24, 2016`,
                score: `8,9`,
              },
              {
                text: `ut vero? Dolores in incidunt ipsa soluta!`,
                author: `Matthew Lickona`,
                date: `December 20, 2016`,
                score: `7,2`,
              },
            ],
          }
        }
        movies={[{
          id: 4,
          title: `Moonrise Kingdom`,
          previewSource: `img/moonrise-kingdom.jpg`
        },
        {
          id: 5,
          title: `Seven Years in Tibet`,
          previewSource: `img/seven-years-in-tibet.jpg`
        },
        {
          id: 6,
          title: `Midnight Special`,
          previewSource: `img/midnight-special.jpg`
        },
        {
          id: 7,
          title: `War of the Worlds`,
          previewSource: `img/war-of-the-worlds.jpg`
        },
        ]}
        onMovieCardClick={handleMovieCardClick}
      />
  );

  const formSendPrevention1 = jest.fn();
  const formSendPrevention2 = jest.fn();
  const movieCards = mainScreen.find(`.small-movie-card`);

  movieCards.forEach((movieCard) => {
    movieCard.simulate(`click`, {
      preventDefault: formSendPrevention1,
    });
    movieCard.simulate(`mouseenter`, {
      preventDefault: formSendPrevention2,
    });
  });

  expect(formSendPrevention1).toHaveBeenCalledTimes(movieCards.length);
  expect(formSendPrevention2).toHaveBeenCalledTimes(movieCards.length);
  expect(handleMovieCardClick).toHaveBeenCalledTimes(movieCards.length);
});
