import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import BigVideoPlayer from './big-video-player';
import history from '../../history';
import {noop} from '../../utils/helpers';

it(`Render BigVideoPlayer`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <BigVideoPlayer
            movieId={1}
            title={`Test Movie`}
            isLoading={false}
            isPlaying={true}
            onPlayButtonClick={noop}
            onFullScreenButtonClick={noop}
            onExitButtonClick={noop}
            progress={0}
            timeElapsed={`30:23`}
          >
            <video />
          </BigVideoPlayer>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
