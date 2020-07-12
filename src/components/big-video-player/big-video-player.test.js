import React from 'react';
import renderer from 'react-test-renderer';
import BigVideoPlayer from './big-video-player';

it(`Render BigVideoPlayer`, () => {
  const tree = renderer
    .create(
        <BigVideoPlayer
          title={`Test Movie`}
          isLoading={false}
          isPlaying={true}
          onPlayButtonClick={()=>{}}
          onFullScreenButtonClick={()=>{}}
          onExitButtonClick={()=>{}}
          progress={0}
          timeElapsed={`30:23`}
        >
          <video />
        </BigVideoPlayer>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
