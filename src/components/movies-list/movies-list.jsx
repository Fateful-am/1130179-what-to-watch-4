import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {MoviePropTypes} from '../../consts';
import {ActionCreator} from '../../reducer';

function MoviesList(props) {
  const {renderMovies, onMovieCardClick} = props;
  return (
    <div className="catalog__movies-list">
      {renderMovies.map((movie) => {
        return (
          <MovieCard
            key={`mc-${movie.id}`}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
            previewSource={movie.previewSource}
            previewMovie={movie.previewMovie}
            onClick={onMovieCardClick}
          />
        );
      })}
    </div>
  );
}

MoviesList.propTypes = {
  renderMovies: PropTypes.arrayOf(MoviePropTypes.movie).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    renderMovies: state.genreMovies.slice(0, state.renderedMovieCount),
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
