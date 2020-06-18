import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

it(`Render Movies List`, () => {
  const tree = renderer
    .create(
        <MoviesList
          movies={[{
            id: 4,
            title: `Moonrise Kingdom`,
            posterSource: `img/moonrise-kingdom.jpg`
          },
          {
            id: 5,
            title: `Seven Years in Tibet`,
            posterSource: `img/seven-years-in-tibet.jpg`
          },
          {
            id: 6,
            title: `Midnight Special`,
            posterSource: `img/midnight-special.jpg`
          },
          {
            id: 7,
            title: `War of the Worlds`,
            posterSource: `img/war-of-the-worlds.jpg`
          },
          ]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
