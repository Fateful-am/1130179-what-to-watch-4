import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      movieCard={
        {genre: `Drama`,
          title: `The Grand Budapest Hotel`,
          year: 2014}
      }
      smallMovieCards={[`Fantastic Beasts: The Crimes of Grindelwald`,
        `Bohemian Rhapsody`,
        `Macbeth`,
        `Aviator`
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
