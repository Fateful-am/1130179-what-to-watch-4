import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

it(`Render Movies List`, () => {
  const tree = renderer
    .create(
        <MoviesList
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
          },
          ]}
          onMovieCardClick={()=>{}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
