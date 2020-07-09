import React from 'react';
import {MoviePropTypes} from '../../consts';
import {formatDuration} from '../../utils/helpers.js';

const MoviePageDetails = ({movie}) => {
  const renderActorName = (actor, isLast) => {
    if (isLast) {
      return <>{actor}</>;
    }
    return <>{`${actor},`}<br/></>;
  };

  const actors = movie.starring.split(`, `).map((actor, i, array) => {
    return (
      <React.Fragment key={`actor-${i}-${movie.id}`}>
        {renderActorName(actor, i === array.length - 1)}
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
        {renderMovieCardDetailsItem(`Genre`, movie.genre)}
        {renderMovieCardDetailsItem(`Released`, movie.released)}
      </div>
    </div>
  );
};

MoviePageDetails.propTypes = MoviePropTypes;

export default MoviePageDetails;
