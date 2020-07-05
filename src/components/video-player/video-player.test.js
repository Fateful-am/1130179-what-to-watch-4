import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import {testMovieCard} from '../../utils/test-data';

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          previewSource={testMovieCard.previewSource}
          src={testMovieCard.previewMovie}
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
