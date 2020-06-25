import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {PREVIEW_MOVIE_DELAY} from '../../consts.js';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._playMovie = this._playMovie.bind(this);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };

  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  _playMovie() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      const {src} = this.props;
      video.src = src;
      setTimeout(this._playMovie, PREVIEW_MOVIE_DELAY);
    } else {
      video.src = ``;
    }
  }

  render() {
    const {previewSource, src} = this.props;
    return (
      <div className="small-movie-card__image">
        <video width="280" height="175" preload="none"
          ref={this._videoRef}
          muted={true}
          src={src}
          poster={previewSource}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  previewSource: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
