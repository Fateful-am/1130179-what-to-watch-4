import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PageKind, START_MOVIE_COUNT, MOVIE_LIKE_THIS_COUNT} from '../../consts';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {getMovieById} from '../../utils/helpers';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PageKind.MAIN,
      currentId: null
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _handleMovieCardClick(movieId) {
    this.setState({
      currentPage: PageKind.MOVIE_PAGE,
      currentId: movieId
    });
  }

  _stateRender() {
    const {promoMovie, movies} = this.props;
    const {currentPage, currentId} = this.state;
    switch (currentPage) {
      case PageKind.MAIN:
        return (
          <Main
            promoMovie={promoMovie}
            movies={movies.slice(0, START_MOVIE_COUNT)}
            onMovieCardClick={this._handleMovieCardClick}
          />
        );
      case PageKind.MOVIE_PAGE:
        const currentMovie = getMovieById(movies, currentId);
        const currentGenre = currentMovie.genre;
        const moviesLikeThis = movies.filter((movie) => movie.genre === currentGenre && movie.id !== currentId).slice(0, MOVIE_LIKE_THIS_COUNT);
        return (
          <MoviePage
            movie={currentMovie}
            moviesLikeThis={moviesLikeThis}
            onMovieCardClick={this._handleMovieCardClick}
          />
        );
    }
    return null;
  }

  render() {
    const {movies, promoMovie} = this.props;
    const promoGenre = promoMovie.genre;
    const moviesLikeThis = movies.filter((movie) => movie.genre === promoGenre).slice(0, MOVIE_LIKE_THIS_COUNT);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._stateRender()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movie={promoMovie}
              moviesLikeThis={moviesLikeThis}
              onMovieCardClick={this._handleMovieCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
    coverSource: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
