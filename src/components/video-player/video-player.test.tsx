import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import {noop} from '../../utils/helpers';

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          onMouseHover={noop}
          onMouseLeave={noop}
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
