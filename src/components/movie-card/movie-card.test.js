import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          onMouseEnter={() => {
          }}
          id={0}
          title={`Macbeth`}
          imageSource={`img/macbeth.jpg`}
          onTitleClick={() => {
          }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
