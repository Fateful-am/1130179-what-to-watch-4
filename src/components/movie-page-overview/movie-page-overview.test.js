import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageOverview from './movie-page-overview';
import {testMovieCard} from '../../utils/test-data';

it(`Render MoviePageOverview`, () => {
  const tree = renderer
    .create(
        <MoviePageOverview
          movie={testMovieCard}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
