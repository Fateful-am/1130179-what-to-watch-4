import * as React from 'react';
import {formatDurationInMinutes} from '../../utils/helpers';
import {MoviePropTypes} from '../../types';

interface Props {
  movie: MoviePropTypes;
}

const MoviePageDetails: React.FunctionComponent<Props> = (props: Props) => {
  const {movie} = props;
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
        {renderMovieCardDetailsItem(`Run Time`, formatDurationInMinutes(movie.runTime))}
        {renderMovieCardDetailsItem(`Genre`, movie.genre)}
        {renderMovieCardDetailsItem(`Released`, movie.released)}
      </div>
    </div>
  );
};

export default MoviePageDetails;
