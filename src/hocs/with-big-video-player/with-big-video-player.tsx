import * as React from 'react';
import {formatDurationInSeconds, getMovieById, pushHistory} from '../../utils/helpers';
import {AppRoute, MOVIE_NOT_FOUND_MESSAGE} from '../../consts';
import {getMovies} from '../../reducer/data/selectors';
import {connect} from 'react-redux';
import {MoviePropTypes} from '../../types';

interface Props {
  movies: MoviePropTypes[],
  match: {
    params: {
      id: string,
    }
  }
}

interface State {
  progress: number,
  duration: number,
  isLoading: boolean,
  isPlaying: boolean,
  videoLink: string,
  previewImage: string,
  title: string,
}

const withBigVideoPlayer = (Component) => {
  class WithBigAudioPlayer extends React.PureComponent<Props, State> {
    private needMovieLoad: boolean;
    private movieId: number;
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        progress: 0,
        duration: -1,
        isLoading: true,
        isPlaying: false,
        videoLink: ``,
        previewImage: ``,
        title: MOVIE_NOT_FOUND_MESSAGE
      };

      this.needMovieLoad = true;
      this.movieId = -1;

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._switchToFullScreen = this._switchToFullScreen.bind(this);
      this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
    }

    componentDidMount() {
      const {videoLink, previewImage} = this.state;
      const video = this.videoRef.current;

      video.src = videoLink;
      video.poster = previewImage;
      video.muted = true;

      video.oncanplaythrough = () => {
        if (this.state.isPlaying) {
          video.play();
          video.muted = false;
        }

        this.setState({
          isLoading: false,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
          duration: Math.floor(video.duration),
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };

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

      this._checkMovie();
    }

    _checkMovie() {
      const video = this.videoRef.current;

      const movie = this._getCurrentMovie();
      if (movie && this.needMovieLoad) {
        video.src = movie.videoLink;
        video.poster = movie.previewImage;
        this.setState({
          title: movie.title,
          isPlaying: true,
        });
        this.needMovieLoad = false;
        this.movieId = movie.id;
      }
    }

    _getMovieId() {
      return this.props.match.params.id;
    }

    _getCurrentMovie() {
      const movie = getMovieById(this.props.movies, this._getMovieId());
      return movie.id > -1 ? movie : null;
    }

    componentDidUpdate(prevProps, prevState) {
      const video = this.videoRef.current;

      this._checkMovie();

      if (!this.needMovieLoad) {
        if (prevState.isPlaying !== this.state.isPlaying && !this.state.isLoading) {
          if (this.state.isPlaying) {
            video.play();
          } else {
            video.pause();
          }
        }
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

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
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    _handleExitButtonClick() {
      if (this.movieId === -1) {
        pushHistory(AppRoute.MAIN);
        return;
      }
      pushHistory(`${AppRoute.FILM}/${this.movieId}`);
    }

    render() {
      const {isLoading, isPlaying, progress: currentTime, duration, title} = this.state;
      const progress = duration ? 100 * currentTime / duration : 0;
      return (
        <Component
          {...this.props}
          movieId={this.movieId}
          isLoading={isLoading}
          isPlaying={isPlaying}
          progress={progress}
          title={title}
          timeElapsed={formatDurationInSeconds(duration - currentTime)}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._switchToFullScreen}
          onExitButtonClick={this._handleExitButtonClick}
        >
          <video
            className="player__video"
            ref={this.videoRef}
          />
        </Component>
      );
    }
  }

  const mapStateToProps = (state) => {
    return ({
      movies: getMovies(state),
    });
  };

  return connect(mapStateToProps)(WithBigAudioPlayer);
};

export default withBigVideoPlayer;
