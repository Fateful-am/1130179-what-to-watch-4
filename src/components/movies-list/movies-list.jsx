import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from '../movie-card/movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovieId: -1
    };
  }

  render() {
    const {movieCards, onHeaderClick, onMovieCardMouseEnter} = this.props;

    return (
      <div className="catalog__movies-list">
        {movieCards.map((movieCard) => {
          return (
            <MovieCard
              key={movieCard.id}
              id={movieCard.id}
              title={movieCard.title}
              onHeaderClick={onHeaderClick}
              onMovieCardMouseEnter={onMovieCardMouseEnter}
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
    onHeaderClick: PropTypes.func.isRequired,
    onMovieCardMouseEnter: PropTypes.func.isRequired
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired
};
