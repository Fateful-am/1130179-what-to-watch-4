import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          id={0}
          title={`Macbeth`}
          previewSource={`img/macbeth.jpg`}
          previewMovie={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
          onClick={() => {
          }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
