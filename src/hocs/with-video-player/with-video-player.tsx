import * as React from 'react';
import {PREVIEW_MOVIE_DELAY} from '../../consts';
import {Subtract} from "utility-types";

interface Props {
  previewImage: string,
  previewVideoLink: string,
}

interface InjectingProps {
  onPause: () => void,
  onPlay: () => void,
}

interface State {
  isPlaying: boolean,
}

const withVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithVideoPlayer extends React.PureComponent<T, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this._playMovie = this._playMovie.bind(this);
      this._handleLeave = this._handleLeave.bind(this);
      this._handleHover = this._handleHover.bind(this);

      this.videoRef = React.createRef();

      this.state = {
        isPlaying: false,
      };
    }

    componentDidMount() {
      const video = this.videoRef.current;

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
      const video = this.videoRef.current;

      video.onplay = null;
      video.onabort = null;
      video.src = ``;
    }

    _playMovie() {
      const video = this.videoRef.current;
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
      const video = this.videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        setTimeout(this._playMovie, PREVIEW_MOVIE_DELAY);
      } else {
        video.src = ``;
      }
    }

    _handleLeave(evt) {
      evt.preventDefault();
      this.setState({
        isPlaying: false
      });
    }

    _handleHover(evt) {
      evt.preventDefault();
      this.setState({
        isPlaying: true
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseHover={this._handleHover}
          onMouseLeave={this._handleLeave}
        >
          <video
            className="player__video"
            ref={this.videoRef}
          />
        </Component>
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
