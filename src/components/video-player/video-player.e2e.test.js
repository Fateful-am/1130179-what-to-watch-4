import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';
import {testMovieCard} from '../../utils/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should preview movie played`, () => {
  const mouseHover = jest.fn();
  const mouseLeave = jest.fn();

  const videoPlayerScreen = mount(
      <VideoPlayer
        previewSource={testMovieCard.previewSource}
        src={testMovieCard.previewVideoLink}
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
