import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {id, title, previewSource, previewMovie, onClick} = this.props;

    const handleHover = (evt) => {
      evt.preventDefault();
      this.setState({
        isPlaying: true
      });
    };

    const handleLeave = (evt) => {
      evt.preventDefault();
      this.setState({
        isPlaying: false
      });
    };

    const handleClick = (evt) => {
      evt.preventDefault();
      onClick(id);
    };

    return (
      <article
        className="small-movie-card catalog__movies-card"
        id={`mc-${id}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        <VideoPlayer
          isPlaying={this.state.isPlaying}
          previewSource={previewSource}
          src={previewMovie}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewSource: PropTypes.string.isRequired,
  previewMovie: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCard);
