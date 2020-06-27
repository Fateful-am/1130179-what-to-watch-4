import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviePage from './movie-page';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should moviePageTabs clicked and correct state established`, () => {

  const moviePageScreen = mount(
      <MoviePage
        movie={{
          id: 8,
          title: `The Grand Budapest Hotel`,
          genre: `Drama`,
          year: 2014,
          posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
          coverSource: `img/bg-the-grand-budapest-hotel.jpg`,
          previewSource: `img/the-grand-budapest-hotel-poster.jpg`,
          previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          rating: {
            score: `8,9`,
            level: `Very good`,
            count: 240,
          },
          descriptions: [
            `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
            `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
          ],
          director: `Wes Andreson`,
          starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`,
          runTime: 99,
          reviews: [
            {
              text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
              author: `Kate Muir`,
              date: new Date(`2016-12-24`),
              score: `8,9`,
            },
            {
              text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
              author: `Bill Goodykoontz`,
              date: new Date(`2015-11-18`),
              score: `8,0`,
            },
            {
              text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
              author: `Amanda Greever`,
              date: new Date(`2015-11-18`),
              score: `8,0`,
            },
            {
              text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
              author: `Matthew Lickona`,
              date: new Date(`2016-12-20`),
              score: `7,2`,
            },
            {
              text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
              author: `Paula Fleri-Soler`,
              date: new Date(`2016-12-20`),
              score: `7,6`,
            },
            {
              text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
              author: `Paula Fleri-Soler`,
              date: new Date(`2016-12-20`),
              score: `7,0`,
            },
          ],
        }}
      />
  );

  const tabLinks = moviePageScreen.find(`.movie-nav__link`);
  const formSendPrevention = jest.fn();

  tabLinks.at(0).simulate(`click`, {
    preventDefault: formSendPrevention,
    target: {
      outerText: `Overview`,
      tagName: `A`
    }
  });

  expect(moviePageScreen.state()).toMatchObject({activeTab: `Overview`});

  tabLinks.at(1).simulate(`click`, {
    preventDefault: formSendPrevention,
    target: {
      outerText: `Details`,
      tagName: `A`
    }
  });

  expect(moviePageScreen.state()).toMatchObject({activeTab: `Details`});

  tabLinks.at(2).simulate(`click`, {
    preventDefault: formSendPrevention,
    target: {
      outerText: `Reviews`,
      tagName: `A`
    }
  });

  expect(moviePageScreen.state()).toMatchObject({activeTab: `Reviews`});
});
