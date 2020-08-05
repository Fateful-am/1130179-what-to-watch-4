import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {AppRoute, MoviePropTypes} from '../../consts';
import {ActionCreator} from '../../reducer/movie/movie';
import {getGenreMovies} from '../../reducer/movie/selectors';
import {Link} from 'react-router-dom';
import history from '../../history';

function MoviesList(props) {
  const {renderedMovies, onMovieCardClick} = props;
  const handleMovieCardClick = (id) => () => {
    history.push(`${AppRoute.FILM}/${id}`);
  };

  return (
    <div className="catalog__movies-list">
      {renderedMovies.map((movie) => {
        return (
          <MovieCard
            key={`mc-${movie.id}`}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
            previewImage={movie.previewImage}
            previewVideoLink={movie.previewVideoLink}
            onClick={handleMovieCardClick(movie.id)}
          />
        );
      })}
    </div>
  );
}

MoviesList.propTypes = {
  renderedMovies: PropTypes.arrayOf(MoviePropTypes.movie).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    renderedMovies: getGenreMovies(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(movieId, genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.showMovieDetail(movieId));
  },
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
