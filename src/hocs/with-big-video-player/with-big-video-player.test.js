import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withBigVideoPlayer from './with-big-video-player';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {TEST_DATA} from '../../utils/test-data';
import {Provider} from 'react-redux';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

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

const MockComponentWrapped = withBigVideoPlayer(MockComponent);

it(`withBigVideoPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        videoLink={``}
        previewImage={``}
        title={``}
        onExitButtonClick={() => {}}
        match={{params: {id: `8`}}}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

