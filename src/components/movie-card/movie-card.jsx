import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({id, title, imageSource, onTitleClick, onMouseEnter}) => {
  const handleMouseEnter = (evt) => {
    evt.preventDefault();
    onMouseEnter(id);
  };

  const handleTitleClick = (evt) => {
    evt.preventDefault();
    onTitleClick(id);
  };
  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={`mc-${id}`}
      onMouseEnter={handleMouseEnter}
    >
      <div className="small-movie-card__image">
        <img src={imageSource} alt={title} width="280" height="175"/>
      </div>
      <h3
        className="small-movie-card__title"
        onClick={handleTitleClick}
      >
        <a className="small-movie-card__link" href="#">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default MovieCard;
