import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          isPlaying={false}
          previewSource={`img/macbeth.jpg`}
          src={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
