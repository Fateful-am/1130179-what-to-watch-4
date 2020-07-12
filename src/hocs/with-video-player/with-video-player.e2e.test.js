import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlayer from './with-video-player';

configure({adapter: new Adapter()});

const Player = (props) => {
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

Player.propTypes = {
  onMouseHover: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

it(`Has working hooks after 1 sec after mouse hover`, (done) => {
  const PlayerWrapped = withVideoPlayer(Player);
  const wrapper = mount(
      <PlayerWrapped
        previewImage={``}
        previewVideoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      />
  );

  window.HTMLMediaElement.prototype.play = () => {};

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
