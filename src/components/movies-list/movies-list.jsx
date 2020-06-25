import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);

    this.state = {
      clickedMovieId: null
    };
  }

  _handleMovieCardClick(movieId) {
    this.setState({clickedMovieId: movieId});
    this.props.onMovieCardClick(movieId);
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={`mc-${movie.id}`}
              id={movie.id}
              title={movie.title}
              previewSource={movie.previewSource}
              previewMovie={movie.previewMovie}
              onClick={this._handleMovieCardClick}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MoviesList;
