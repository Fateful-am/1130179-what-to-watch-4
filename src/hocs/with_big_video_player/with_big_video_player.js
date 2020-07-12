import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {formatDurationInSeconds} from '../../utils/helpers';

const withBigVideoPlayer = (Component) => {
  class WithBigAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        progress: 0,
        duration: 0,
        isLoading: true,
        isPlaying: false,
      };

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._switchToFullScreen = this._switchToFullScreen.bind(this);
    }

    componentDidMount() {
      const {videoLink, previewImage} = this.props;
      const video = this._videoRef.current;

      video.src = videoLink;
      video.poster = previewImage;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({
          isPlaying: true,
          duration: Math.floor(video.duration),
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => {
        const progress = Math.floor(video.currentTime);
        if (progress === this.state.duration) {
          video.currentTime = 0;
          this.setState({
            isPlaying: false,
          });

          return;
        }
        this.setState({
          progress: Math.floor(video.currentTime),
        });
      };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    _handlePlayButtonClick() {
      const {isPlaying} = this.state;
      this.setState({isPlaying: !isPlaying});
    }

    _switchToFullScreen() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {isLoading, isPlaying, progress: currentTime, duration} = this.state;
      const {title, onExitButtonClick} = this.props;
      const progress = duration ? 100 * currentTime / duration : 0;
      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          progress={progress}
          title={title}
          timeElapsed={formatDurationInSeconds(duration - currentTime)}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._switchToFullScreen}
          onExitButtonClick={onExitButtonClick}
        >
          <video
            className="player__video"
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithBigAudioPlayer.propTypes = {
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithBigAudioPlayer;
};

export default withBigVideoPlayer;
