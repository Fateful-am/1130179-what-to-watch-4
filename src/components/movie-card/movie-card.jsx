import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = (props) => {
  const {id, title, previewSource, previewMovie, onClick} = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    onClick(id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={`mc-${id}`}
      onClick={handleClick}
    >
      <VideoPlayer
        previewSource={previewSource}
        src={previewMovie}
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
  previewSource: PropTypes.string.isRequired,
  previewMovie: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCard);
