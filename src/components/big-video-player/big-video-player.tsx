import * as React from 'react';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';

interface Props {
  movieId: number,
  title: string,
  isLoading: boolean,
  isPlaying: boolean,
  onPlayButtonClick: () => void,
  onFullScreenButtonClick: () => void,
  onExitButtonClick: () => void,
  progress: number,
  timeElapsed: string,
  children: React.ReactNode | React.ReactNode[],
}

const BigVideoPlayer: React.FunctionComponent<Props> = (props: Props) => {
  const renderPlaySvg = () => {
    return (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
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

  const {title, children, progress, timeElapsed, onFullScreenButtonClick, onExitButtonClick, movieId} = props;

  const linkTo = movieId === -1 ? AppRoute.MAIN : `${AppRoute.FILM}/${movieId}`;
  return (
    <div className="player">
      {children}

      <Link to={linkTo} type="button" className="player__exit" onClick={onExitButtonClick}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          {renderPlayButton()}

          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
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

export default BigVideoPlayer;
