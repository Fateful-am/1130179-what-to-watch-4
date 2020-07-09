import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);
const MovieCard = (props) => {
  const {id, title, genre, previewSource, previewVideoLink, onClick} = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    onClick(id, genre);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={`mc-${id}`}
      onClick={handleClick}
    >
      <VideoPlayerWrapped
        previewSource={previewSource}
        src={previewVideoLink}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  previewSource: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCard);
