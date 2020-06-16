import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`Render Movie Card`, () => {
  const tree = renderer
    .create(
        <MovieCard
          onMouseEnter={() => {
          }}
          id={0}
          title={`Macbeth`}
          onHeaderClick={() => {
          }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
