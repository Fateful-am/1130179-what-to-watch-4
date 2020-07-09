import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {testMovieCard} from '../../utils/test-data';

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          id={testMovieCard.id}
          title={testMovieCard.title}
          genre={testMovieCard.genre}
          previewSource={testMovieCard.previewSource}
          previewVideoLink={testMovieCard.previewVideoLink}
          onClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
