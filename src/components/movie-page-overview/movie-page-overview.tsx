import * as React from 'react';
import {SHORT_ACTORS_LIST_COUNT} from '../../consts';
import {MoviePropTypes} from '../../types';

interface Props {
  movie: MoviePropTypes;
}

const MoviePageOverview: React.FunctionComponent<Props> = (props: Props) => {
  const {movie} = props;
  const actors = movie.starring.split(`, `);
  const shortActors = actors.length > SHORT_ACTORS_LIST_COUNT ? `${actors.slice(0, SHORT_ACTORS_LIST_COUNT).join(`, `)} and other` : movie.starring;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movie.rating.level}</span>
          <span className="movie-rating__count">{`${movie.rating.count} ratings`}</span>
        </p>
      </div>
      <div className="movie-card__text">
        {
          movie.descriptions.map((description, i) => {
            return (
              <p key={`desc-${i}-${movie.id}`}>{description}</p>
            );
          })
        }
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {shortActors}</strong></p>
      </div>
    </>
  );
};

export default MoviePageOverview;
