import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should preview movie played`, () => {
  const moviePlay = jest.fn();
  const moviePause = jest.fn();

  const videoPlayerScreen = mount(
      <VideoPlayer
        previewSource={`img/macbeth.jpg`}
        src={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
        onPlay={moviePlay}
        onPause={moviePause}
      />
  );

  const videoContainer = videoPlayerScreen.find(`.small-movie-card__image`);
  const formSendPrevention = jest.fn();

  videoContainer.simulate(`mouseenter`, {
    preventDefault: formSendPrevention
  });

  expect(videoPlayerScreen.state()).toMatchObject({isPlaying: true});

  videoContainer.simulate(`mouseleave`, {
    preventDefault: formSendPrevention
  });

  expect(videoPlayerScreen.state()).toMatchObject({isPlaying: false});

  expect(formSendPrevention).toHaveBeenCalledTimes(2);
});
