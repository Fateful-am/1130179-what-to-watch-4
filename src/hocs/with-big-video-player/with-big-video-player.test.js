import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withBigVideoPlayer from './with-big-video-player';

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

const MockComponentWrapped = withBigVideoPlayer(MockComponent);

it(`withBigVideoPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      videoLink={``}
      previewImage={``}
      title={``}
      onExitButtonClick={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

