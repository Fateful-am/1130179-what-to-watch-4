import React from 'react';
import PropTypes from 'prop-types';
import {convertToImageName} from '../../utils/helpers';

const MovieCard = ({id, title, onHeaderClick, onMovieCardMouseEnter}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={`mc-${id}`}
      onMouseEnter={onMovieCardMouseEnter}
    >
      <div className="small-movie-card__image">
        <img src={`img/${convertToImageName(title)}.jpg`} alt={title} width="280" height="175"/>
      </div>
      <h3
        className="small-movie-card__title"
        onClick={onHeaderClick}
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
  onMovieCardMouseEnter: PropTypes.func.isRequired
};
