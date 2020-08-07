import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router-dom";
import BigVideoPlayer from './big-video-player';
import history from '../../history';

it(`Render BigVideoPlayer`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <BigVideoPlayer
            movieId={1}
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
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
