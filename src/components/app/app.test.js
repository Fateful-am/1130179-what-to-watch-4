import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoMovieCard={
        {
          genre: `Drama`,
          title: `The Grand Budapest Hotel`,
          year: 2014
        }
      }
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
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
