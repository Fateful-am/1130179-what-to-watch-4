import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

it(`Render Movies List`, () => {
  const tree = renderer
    .create(
        <MoviesList
          movieCards={[{
            id: 4,
            title: `Moonrise Kingdom`
          },
          {
            id: 5,
            title: `Seven Years in Tibet`
          },
          {
            id: 6,
            title: `Midnight Special`
          },
          {
            id: 7,
            title: `War of the Worlds`
          },
          ]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
