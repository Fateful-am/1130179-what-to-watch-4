import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BigVideoPlayer from './big-video-player';

configure({adapter: new Adapter()});

it(`Click by Play, Exit and FullScreen button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const handleFullScreenButtonClick = jest.fn();
  const handleExitButtonClick = jest.fn();
  const wrapper = shallow(<BigVideoPlayer
    movieId={1}
    title={`Test Movie`}
    isLoading={false}
    isPlaying={true}
    onPlayButtonClick={handlePlayButtonClick}
    onFullScreenButtonClick={handleFullScreenButtonClick}
    onExitButtonClick={handleExitButtonClick}
    progress={0}
    timeElapsed={`30:23`}
  >
    <video />
  </BigVideoPlayer>);

  wrapper.find(`.player__play`).simulate(`click`);
  wrapper.find(`.player__exit`).simulate(`click`);
  wrapper.find(`.player__full-screen`).simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleFullScreenButtonClick).toHaveBeenCalledTimes(1);
  expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
});
