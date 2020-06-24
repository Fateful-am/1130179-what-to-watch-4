import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = ({id, title, previewSource, previewMovie, onClick, onHover, isPlaying}) => {
  const handleHover = (evt) => {
    evt.preventDefault();
    onHover(id);
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
      onClick={handleClick}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        previewSource={previewSource}
        src={previewMovie}
      />
      <h3
        className="small-movie-card__title"
      >
        <a className="small-movie-card__link" href="#">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewSource: PropTypes.string.isRequired,
  previewMovie: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
