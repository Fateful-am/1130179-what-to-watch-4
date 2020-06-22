import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          onHover={() => {
          }}
          id={0}
          title={`Macbeth`}
          previewSource={`img/macbeth.jpg`}
          onClick={() => {
          }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
