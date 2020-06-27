import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
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
              starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
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
