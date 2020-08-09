import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button';
import {noop} from '../../utils/helpers';

it(`"Render "Show more button" component`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
