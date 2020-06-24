import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };

  }


  componentDidMount() {
    const {previewSource, src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = previewSource;
    video.width = 280;
    video.height = 175;
    video.muted = true;


    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => this.setState({
      isPlaying: true,
    });

  }


  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {

      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    return (
      <div className="small-movie-card__image">
        <video
          ref={this._videoRef}
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
