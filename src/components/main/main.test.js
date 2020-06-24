import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Render Main`, () => {
  const tree = renderer
    .create(
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
              previewMovie: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
            previewSource: `img/moonrise-kingdom.jpg`,
            previewMovie: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          },
          {
            id: 5,
            title: `Seven Years in Tibet`,
            previewSource: `img/seven-years-in-tibet.jpg`,
            previewMovie: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          },
          {
            id: 6,
            title: `Midnight Special`,
            previewSource: `img/midnight-special.jpg`,
            previewMovie: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          },
          {
            id: 7,
            title: `War of the Worlds`,
            previewSource: `img/war-of-the-worlds.jpg`,
            previewMovie: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          }]}
          onMovieCardClick={()=>{}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
