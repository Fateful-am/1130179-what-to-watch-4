import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          onMouseHover={()=>{}}
          onMouseLeave={()=>{}}
        >
          <video />
        </VideoPlayer>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
