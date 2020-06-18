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
            imageSource: `img/moonrise-kingdom.jpg`
          },
          {
            id: 5,
            title: `Seven Years in Tibet`,
            imageSource: `img/seven-years-in-tibet.jpg`
          },
          {
            id: 6,
            title: `Midnight Special`,
            imageSource: `img/midnight-special.jpg`
          },
          {
            id: 7,
            title: `War of the Worlds`,
            imageSource: `img/war-of-the-worlds.jpg`
          },
          ]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
