import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {PageKind, START_MOVIE_COUNT, MOVIE_LIKE_THIS_COUNT} from '../../consts';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {getMovieById} from '../../utils/helpers';

class App extends PureComponent {
  _stateRender() {
    const {promoMovie, movies, currentPage, currentMovieId, onMovieCardClick} = this.props;
    switch (currentPage) {
      case PageKind.MAIN:
        return (
          <Main
            promoMovie={promoMovie}
            movies={movies.slice(0, START_MOVIE_COUNT)}
            onMovieCardClick={onMovieCardClick}
          />
        );
      case PageKind.MOVIE_PAGE:
        const currentMovie = getMovieById(movies, currentMovieId);
        const currentGenre = currentMovie.genre;
        const moviesLikeThis = movies.filter((movie) => movie.genre === currentGenre && movie.id !== currentMovieId)
          .slice(0, MOVIE_LIKE_THIS_COUNT);
        return (
          <MoviePage
            movie={currentMovie}
            moviesLikeThis={moviesLikeThis}
            onMovieCardClick={onMovieCardClick}
          />
        );
    }
    return null;
  }

  render() {
    const {movies, promoMovie, onMovieCardClick} = this.props;
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
              onMovieCardClick={onMovieCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
  currentMovieId: PropTypes.number,
  onMovieCardClick: PropTypes.func.isRequired,
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

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  currentMovieId: state.currentMovieId,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(movieId) {
    dispatch(ActionCreator.showMovieDetail(movieId));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
