import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          promoMovie={
            {
              genre: `Drama`,
              title: `The Grand Budapest Hotel`,
              posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
              coverSource: `img/bg-the-grand-budapest-hotel.jpg`,
              year: 2014
            }
          }
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
          }]}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
