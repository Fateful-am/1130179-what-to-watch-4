import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

const withBigVideoPlayer = (Component) => {
  class WithBigAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: false,
      };

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
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
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
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

    render() {
      const {isLoading, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          progress={30}
          onPlayButtonClick={this._handlePlayButtonClick}
        >
          <video
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithBigAudioPlayer.propTypes = {
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  };

  return WithBigAudioPlayer;
};

export default withBigVideoPlayer;
