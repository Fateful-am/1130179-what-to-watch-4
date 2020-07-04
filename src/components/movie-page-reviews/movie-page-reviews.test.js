import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageReviews from './movie-page-reviews';
import {testMovieCard} from '../../utils/test-data';

it(`Render MoviePageReviews`, () => {
  const tree = renderer
    .create(
        <MoviePageReviews
          movie={testMovieCard}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
