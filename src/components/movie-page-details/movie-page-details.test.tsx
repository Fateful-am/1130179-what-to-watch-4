import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviePageDetails from './movie-page-details';
import {testMovieCard} from '../../utils/test-data';

it(`Render MoviePageDetails`, () => {
  const tree = renderer
    .create(
        <MoviePageDetails
          movie={testMovieCard}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
