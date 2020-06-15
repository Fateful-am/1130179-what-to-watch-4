import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
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
