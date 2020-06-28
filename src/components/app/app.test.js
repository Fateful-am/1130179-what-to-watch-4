import React from 'react';
import renderer from 'react-test-renderer';
import {PageKind} from '../../consts';
import {App} from './app.jsx';

describe(`Render App`, () => {
  it(`Render MainScreen`, () => {
    const tree = renderer
    .create(
        <App
          currentPage={PageKind.MAIN}
          promoMovie={
            {
              id: 8,
              title: `The Grand Budapest Hotel`,
              genre: `Drama`,
              year: 2014,
              posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
              coverSource: `img/bg-the-grand-budapest-hotel.jpg`,
              previewSource: `img/macbeth.jpg`,
              previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
              starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`,
              runTime: 99,
              reviews: [
                {
                  text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
                  author: `Kate Muir`,
                  date: new Date(`2016-12-24`),
                  score: `8,9`,
                },
                {
                  text: `ut vero? Dolores in incidunt ipsa soluta!`,
                  author: `Matthew Lickona`,
                  date: new Date(`2016-12-20`),
                  score: `7,2`,
                },
              ],
            }
          }
          movies={[{
            id: 4,
            title: `Moonrise Kingdom`,
            previewSource: `img/moonrise-kingdom.jpg`,
            previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          },
          {
            id: 5,
            title: `Seven Years in Tibet`,
            previewSource: `img/seven-years-in-tibet.jpg`,
            previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          },
          {
            id: 6,
            title: `Midnight Special`,
            previewSource: `img/midnight-special.jpg`,
            previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          },
          {
            id: 7,
            title: `War of the Worlds`,
            previewSource: `img/war-of-the-worlds.jpg`,
            previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          }]}
          onMovieCardClick={()=>{}}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieDetailScreen`, () => {
    const tree = renderer
      .create(
          <App
            currentPage={PageKind.MOVIE_PAGE}
            currentMovieId={7}
            promoMovie={{
              id: 8,
              title: `The Grand Budapest Hotel`,
              genre: `Drama`,
              year: 2014,
              posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
              coverSource: `img/bg-the-grand-budapest-hotel.jpg`,
              previewSource: `img/macbeth.jpg`,
              previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
              starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`,
              runTime: 99,
              reviews: [
                {
                  text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
                  author: `Kate Muir`,
                  date: new Date(`2016-12-24`),
                  score: `8,9`,
                },
                {
                  text: `ut vero? Dolores in incidunt ipsa soluta!`,
                  author: `Matthew Lickona`,
                  date: new Date(`2016-12-20`),
                  score: `7,2`,
                },
              ],
            }}
            movies={[
              {
                id: 4,
                title: `Moonrise Kingdom`,
                genre: `Comedy`,
                year: 2018,
                posterSource: `img/moonrise-kingdom.jpg`,
                coverSource: `img/moonrise-kingdom.jpg`,
                previewSource: `img/moonrise-kingdom.jpg`,
                previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
                starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson`,
                runTime: 99,
                reviews: [
                  {
                    text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
                    author: `Kate Muir`,
                    date: new Date(`2016-12-24`),
                    score: `8,9`,
                  },
                  {
                    text: `ut vero? Dolores in incidunt ipsa soluta!`,
                    author: `Matthew Lickona`,
                    date: new Date(`2016-12-20`),
                    score: `7,2`,
                  },
                ],

              },
              {
                id: 5,
                title: `Seven Years in Tibet`,
                genre: `Drama`,
                year: 2019,
                posterSource: `img/seven-years-in-tibet.jpg`,
                coverSource: `img/seven-years-in-tibet.jpg`,
                previewSource: `img/seven-years-in-tibet.jpg`,
                previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
                starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson`,
                runTime: 99,
                reviews: [
                  {
                    text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
                    author: `Kate Muir`,
                    date: new Date(`2016-12-24`),
                    score: `8,9`,
                  },
                  {
                    text: `ut vero? Dolores in incidunt ipsa soluta!`,
                    author: `Matthew Lickona`,
                    date: new Date(`2016-12-20`),
                    score: `7,2`,
                  },
                ],

              },
              {
                id: 6,
                title: `Midnight Special`,
                genre: `Drama`,
                year: 2020,
                posterSource: `img/midnight-special.jpg`,
                coverSource: `img/midnight-special.jpg`,
                previewSource: `img/midnight-special.jpg`,
                previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
                starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody`,
                runTime: 99,
                reviews: [
                  {
                    text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
                    author: `Kate Muir`,
                    date: new Date(`2016-12-24`),
                    score: `8,9`,
                  },
                  {
                    text: `ut vero? Dolores in incidunt ipsa soluta!`,
                    author: `Matthew Lickona`,
                    date: new Date(`2016-12-20`),
                    score: `7,2`,
                  },
                ],

              },
              {
                id: 7,
                title: `War of the Worlds`,
                genre: `Drama`,
                year: 2021,
                posterSource: `img/war-of-the-worlds.jpg`,
                coverSource: `img/war-of-the-worlds.jpg`,
                previewSource: `img/war-of-the-worlds.jpg`,
                previewMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
                starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes`,
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
                ],

              },
            ]}
            onMovieCardClick={()=>{}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
