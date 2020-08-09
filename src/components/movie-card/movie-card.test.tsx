import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {testMovieCard} from '../../utils/test-data';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCard
            movieId={testMovieCard.id}
            title={testMovieCard.title}
            previewImage={testMovieCard.previewImage}
            previewVideoLink={testMovieCard.previewVideoLink}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
