import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withAddReview from './with-add-review.tsx';
import {TEST_DATA} from '../../utils/test-data';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

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

const store = mockStore({
  [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
});

const MockComponentWrapped = withAddReview(MockComponent);

it(`withAddReview is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        movie={TEST_DATA.promoMovie}
        onSubmit={() => {}}
        computedMatch={{params: {id: `8`}}}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
