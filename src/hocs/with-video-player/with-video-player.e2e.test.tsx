import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideoPlayer from './with-video-player';

interface Props {
  onMouseHover: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode | React.ReactNode[];
}

configure({adapter: new Adapter()});

const Player: React.FunctionComponent<Props> = (props: Props) => {
  const {onMouseHover, onMouseLeave, children} = props;
  return (
    <div
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

it(`Has working hooks after 1 sec after mouse hover`, (done) => {
  const PlayerWrapped = withVideoPlayer(Player);
  const wrapper = mount(
      <PlayerWrapped
        previewImage={``}
        previewVideoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      />
  );

  window.HTMLMediaElement.prototype.play = () => Promise.resolve();

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `play`);

  wrapper.instance().componentDidMount();

  const videoContainer = wrapper.find(`div`);
  videoContainer.simulate(`mouseenter`);

  setTimeout(() => {
    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);

    done();
  }, 1000);
});
