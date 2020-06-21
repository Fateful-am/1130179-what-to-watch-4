import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({id, title, previewSource, onClick, onMouseEnter}) => {
  const handleMouseEnter = (evt) => {
    evt.preventDefault();
    onMouseEnter(id);
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    onClick(id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={`mc-${id}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <div className="small-movie-card__image">
        <img src={previewSource} alt={title} width="280" height="175"/>
      </div>
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
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default MovieCard;
