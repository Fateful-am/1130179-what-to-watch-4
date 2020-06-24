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
          },
          ]}
          onMovieCardClick={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
