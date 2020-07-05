import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button.jsx';

it(`"Render "Show more button" component`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
