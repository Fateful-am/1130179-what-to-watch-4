import * as React from 'react';
import PropTypes from 'prop-types';
import {formatDurationInSeconds, getMovieById, pushHistory} from '../../utils/helpers';
import {AppRoute, MOVIE_NOT_FOUND_MESSAGE, MoviePropTypes} from '../../consts';
import {getMovies} from '../../reducer/data/selectors';
import {connect} from 'react-redux';

const withBigVideoPlayer = (Component) => {
  class WithBigAudioPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        progress: 0,
        duration: -1,
        isLoading: true,
        isPlaying: false,
        videoLink: ``,
        previewImage: ``,
        title: MOVIE_NOT_FOUND_MESSAGE
      };

      this._needMovieLoad = true;
      this._movieId = -1;

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._switchToFullScreen = this._switchToFullScreen.bind(this);
      this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
    }

    componentDidMount() {
      const {videoLink, previewImage} = this.state;
      const video = this._videoRef.current;

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
      const video = this._videoRef.current;

      const movie = this._getCurrentMovie();
      if (movie && this._needMovieLoad) {
        video.src = movie.videoLink;
        video.poster = movie.previewImage;
        this.setState({
          title: movie.title,
          isPlaying: true,
        });
        this._needMovieLoad = false;
        this._movieId = movie.id;
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
      const video = this._videoRef.current;

      this._checkMovie();

      if (!this._needMovieLoad) {
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

    _handleExitButtonClick() {
      if (this._movieId === -1) {
        pushHistory(AppRoute.MAIN);
        return;
      }
      pushHistory(`${AppRoute.FILM}/${this._movieId}`);
    }

    render() {
      const {isLoading, isPlaying, progress: currentTime, duration, title} = this.state;
      const progress = duration ? 100 * currentTime / duration : 0;
      return (
        <Component
          {...this.props}
          movieId={this._movieId}
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
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithBigAudioPlayer.propTypes = {
    movies: PropTypes.arrayOf(MoviePropTypes.movie).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  const mapStateToProps = (state) => {
    return ({
      movies: getMovies(state),
    });
  };

  return connect(mapStateToProps)(WithBigAudioPlayer);
};

export default withBigVideoPlayer;
