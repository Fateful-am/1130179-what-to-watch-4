import React from 'react';
import {MoviePropTypes} from '../../consts';
import {formatDuration} from '../../utils/helpers.js';

const MoviePageDetails = ({movie}) => {
  const actors = movie.starring.split(`, `).map((actor, i, array) => {
    return (
      <React.Fragment key={`actor-${i}-${movie.id}`}>
        {i < array.length - 1 ? `${actor},` : actor}
        {(() => i === array.length - 1 ? null : <br/>)()}
      </React.Fragment>
    );
  });

  const renderMovieCardDetailsItem = (name, value) => {
    return (
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">{name}</strong>
        <span className="movie-card__details-value">{value}</span>
      </p>
    );
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        {renderMovieCardDetailsItem(`Director`, movie.director)}
        {renderMovieCardDetailsItem(`Starring`, actors)}
      </div>

      <div className="movie-card__text-col">
        {renderMovieCardDetailsItem(`Run Time`, formatDuration(movie.runTime))}
        {renderMovieCardDetailsItem(`Genre`, formatDuration(movie.genre))}
        {renderMovieCardDetailsItem(`Released`, formatDuration(movie.year))}
      </div>
    </div>
  );
};

MoviePageDetails.propTypes = MoviePropTypes;

export default MoviePageDetails;
