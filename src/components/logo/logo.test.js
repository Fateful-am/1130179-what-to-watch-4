import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router-dom";
import Logo from './logo';
import history from '../../history';

it(`Render logo on Main Page on header`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Logo
            inFooter={false}
          >
          </Logo>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render logo on Main Page on footer`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Logo
            inFooter={true}
          >
          </Logo>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
