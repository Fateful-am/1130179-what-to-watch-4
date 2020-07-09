import React from 'react';
import PropTypes from 'prop-types';

const BigVideoPlayer = (props) => {
  const renderPlaySvg = () => {
    return (
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
    );
  };

  const renderPauseSvg = () => {
    return (
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"/>
      </svg>
    );
  };

  const renderPlayButton = () => {
    const {isLoading, isPlaying, onPlayButtonClick} = props;
    if (isPlaying) {
      return (
        <button
          type="button"
          className="player__play"
          onClick={onPlayButtonClick}
          disabled={isLoading}>

          {isPlaying ? renderPlaySvg() : renderPauseSvg()}
          <span>{isPlaying ? `Play` : `Pause`}</span>
        </button>
      );
    }

    return (
      <button type="button" className="player__play" onClick={onPlayButtonClick}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"/>
        </svg>
        <span>Pause</span>
      </button>
    );
  };


  const {children, progress} = props;

  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          {renderPlayButton()}

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

BigVideoPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

};

export default BigVideoPlayer;
