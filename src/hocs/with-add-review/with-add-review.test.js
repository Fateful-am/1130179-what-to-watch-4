import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withAddReview from './with-add-review';
import {TEST_DATA} from '../../utils/test-data';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAddReview(MockComponent);

it(`withAddReview is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      movie={TEST_DATA.promoMovie}
      onSubmit={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
