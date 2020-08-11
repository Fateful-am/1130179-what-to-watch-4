import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withVideoPlayer from './with-video-player';
import {noop} from '../../utils/helpers';

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
const PlayerWrapped = withVideoPlayer(Player);


it(`Has working hooks after 1 sec after mouse hover`, (done) => {
  const wrapper = mount(
      <PlayerWrapped
        previewImage={``}
        previewVideoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      />
  );

  window.HTMLMediaElement.prototype.play = () => Promise.resolve();

  const {videoRef} = wrapper.instance();

  jest.spyOn(videoRef.current, `play`);

  wrapper.instance().componentDidMount();

  const videoContainer = wrapper.find(`div`);
  videoContainer.simulate(`mouseenter`);

  setTimeout(() => {
    expect(videoRef.current.play).toHaveBeenCalledTimes(1);

    done();
  }, 1000);
});

it(`_handleTabClick and _handleSetDefaultTab test`, () => {
  const wrapper = mount(
      <PlayerWrapped
        previewImage={``}
        previewVideoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      />
  );
  const instance = wrapper.instance();
  expect(wrapper.state(`isPlaying`)).toEqual(false);
  instance._handleHover({
    preventDefault: noop,
  });
  expect(wrapper.state(`isPlaying`)).toEqual(true);
  instance._handleLeave({
    preventDefault: noop,
  });
  expect(wrapper.state(`isPlaying`)).toEqual(false);
});
