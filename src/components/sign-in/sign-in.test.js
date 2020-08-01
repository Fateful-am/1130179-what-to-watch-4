import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in';

const noop = () => {
};

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <SignIn
        onReplayButtonClick={noop}
        onSubmit={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
