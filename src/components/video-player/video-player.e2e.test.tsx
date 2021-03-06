import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

configure({
  adapter: new Adapter(),
});

it(`Should preview movie played`, () => {
  const mouseHover = jest.fn();
  const mouseLeave = jest.fn();

  const videoPlayerScreen = mount(
      <VideoPlayer
        onMouseHover={mouseHover}
        onMouseLeave={mouseLeave}
      >
        <video />
      </VideoPlayer>
  );

  const videoContainer = videoPlayerScreen.find(`.small-movie-card__image`);

  videoContainer.simulate(`mouseenter`, {
  });

  videoContainer.simulate(`mouseleave`, {
  });

  expect(mouseHover).toHaveBeenCalledTimes(1);
  expect(mouseLeave).toHaveBeenCalledTimes(1);
});
