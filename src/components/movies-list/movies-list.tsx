import * as React from 'react';
import MovieCard from '../movie-card/movie-card';

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

export default MoviesList;
