import React, {createRef, PureComponent} from 'react';
import PropTypes from "prop-types";
import {PREVIEW_MOVIE_DELAY} from '../../consts';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._playMovie = this._playMovie.bind(this);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
      };
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.muted = true;
      video.width = 280;
      video.height = 175;
      video.preload = `none`;
      video.poster = this.props.previewImage;

      video.onabort = () => {
        if (video.paused && this.props.onPause) {
          this.props.onPause();
        }
      };

      video.onplay = () => {
        if (this.props.onPlay) {
          this.props.onPlay();
        }
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.onplay = null;
      video.onabort = null;
      video.src = ``;
    }

    _playMovie() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        if (video) {
          const {previewVideoLink} = this.props;
          video.src = previewVideoLink;
          video.play();
        }
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        setTimeout(this._playMovie, PREVIEW_MOVIE_DELAY);
      } else {
        video.src = ``;
      }
    }

    render() {
      const handleLeave = (evt) => {
        evt.preventDefault();
        this.setState({
          isPlaying: false
        });
      };

      const handleHover = (evt) => {
        evt.preventDefault();
        this.setState({
          isPlaying: true
        });
      };

      return (
        <Component
          {...this.props}
          onMouseHover={handleHover}
          onMouseLeave={handleLeave}
        >
          <video
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    onPause: PropTypes.func,
    onPlay: PropTypes.func,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
