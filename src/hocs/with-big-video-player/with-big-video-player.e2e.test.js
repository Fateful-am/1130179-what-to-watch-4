import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withBigVideoPlayer from './with-big-video-player';

configure({adapter: new Adapter()});

const Player = (props) => {
  const {onPlayButtonClick, onFullScreenButtonClick, onExitButtonClick, children} = props;
  return (
    <div>
      <button className="player__play" onClick={onPlayButtonClick} />
      <button className="player__full-screen" onClick={onFullScreenButtonClick} />
      <button className="player__exit" onClick={onExitButtonClick} />
      {children}
    </div>
  );
};

Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

it(`Checks that HOC's callback turn off video (pause) and then turn on (play)`, () => {
  const PlayerWrapped = withBigVideoPlayer(Player);
  const wrapper = mount(<PlayerWrapped
    videoLink={``}
    previewImage={``}
    title={``}
    onExitButtonClick={() => {}}
  />);

  window.HTMLMediaElement.prototype.pause = () => {};
  window.HTMLMediaElement.prototype.play = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `pause`);

  wrapper.instance().componentDidMount();

  const playButton = wrapper.find(`.player__play`);

  playButton.simulate(`click`);

  expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);


  jest.spyOn(_videoRef.current, `play`);

  playButton.simulate(`click`);

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});
