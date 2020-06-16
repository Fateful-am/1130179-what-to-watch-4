import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const extractId = (elementId) => {
  return elementId.split(`-`).slice(1).join(`-`);
};

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this);
    this._onMovieCardHeaderClick = this._onMovieCardHeaderClick.bind(this);

    this.state = {
      activeMovieId: `-1`,
      clickedMovieId: `-1`
    };
  }

  _onMovieCardMouseEnter(movieCardId) {
    this.setState({activeMovieId: extractId(movieCardId)});
  }

  _onMovieCardHeaderClick(movieCardId) {
    this.setState({clickedMovieId: extractId(movieCardId)});
  }

  render() {
    const {movieCards} = this.props;
    return (
      <div className="catalog__movies-list">
        {movieCards.map((movieCard) => {
          return (
            <MovieCard
              key={`mc-${movieCard.id}`}
              id={movieCard.id}
              title={movieCard.title}
              onHeaderClick={this._onMovieCardHeaderClick}
              onMouseEnter={this._onMovieCardMouseEnter}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movieCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default MoviesList;
