import React from 'react';
import PropTypes from 'prop-types';
import {convertToImageName} from '../../utils/helpers';

export const MovieCard = ({id, title, onHeaderClick, onMouseEnter}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={`mc-${id}`}
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseEnter(evt.currentTarget.id);
      }}
    >
      <div className="small-movie-card__image">
        <img src={`img/${convertToImageName(title)}.jpg`} alt={title} width="280" height="175"/>
      </div>
      <h3
        className="small-movie-card__title"
        onClick={(evt) => {
          evt.preventDefault();
          onHeaderClick(evt.currentTarget.parentNode.id);
        }}
      >
        <a className="small-movie-card__link" href="#">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default MovieCard;
