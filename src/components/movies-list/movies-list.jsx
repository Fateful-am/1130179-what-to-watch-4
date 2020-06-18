import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
    this._handleMovieCardTitleClick = this._handleMovieCardTitleClick.bind(this);

    this.state = {
      activeMovieId: null,
      clickedMovieId: null
    };
  }

  _handleMovieCardMouseEnter(movieId) {
    this.setState({activeMovieId: movieId});
  }

  _handleMovieCardTitleClick(movieId) {
    this.setState({clickedMovieId: movieId});
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
              imageSource={movie.imageSource}
              onTitleClick={this._handleMovieCardTitleClick}
              onMouseEnter={this._handleMovieCardMouseEnter}
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
    imageSource: PropTypes.string.isRequired,
  })).isRequired,
};

export default MoviesList;
