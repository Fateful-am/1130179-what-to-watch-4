import * as React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {MoviePropTypes} from '../../consts';

function MoviesList(props) {
  const {renderedMovies, children} = props;

  return (
    <>
      {renderedMovies.length > 0 && children}
      <div className="catalog__movies-list">
        {renderedMovies.map((movie) => {
          return (
            <MovieCard
              key={`mc-${movie.id}`}
              movieId={movie.id}
              title={movie.title}
              previewImage={movie.previewImage}
              previewVideoLink={movie.previewVideoLink}
            />
          );
        })}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  renderedMovies: PropTypes.arrayOf(MoviePropTypes.movie).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};


export default MoviesList;
