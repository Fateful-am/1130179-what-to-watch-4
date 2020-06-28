import React from 'react';
import {MoviePageTabNames, MoviePropTypes, MoviePageTabClassNames} from '../../consts.js';
import MoviePageTabs from '../movie-page-tabs/movie-page-tabs.jsx';
import MoviePageOverview from '../movie-page-overview/movie-page-overview.jsx';
import MoviePageDetails from '../movie-page-details/movie-page-details.jsx';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews.jsx';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);

    this.state = {
      activeTab: MoviePageTabNames.OVERVIEW,
    };
  }

  _handleTabClick(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  _getCurrentMoviePageMarkup() {
    const {movie} = this.props;

    switch (this.state.activeTab) {
      case MoviePageTabNames.DETAILS:
        return <MoviePageDetails movie={movie} />;
      case MoviePageTabNames.REVIEWS:
        return <MoviePageReviews movie={movie} />;
      default:
        return <MoviePageOverview movie={movie} />;
    }
  }

  render() {
    const {movie, moviesLikeThis, onMovieCardClick} = this.props;
    const tabs = Object.values(MoviePageTabNames);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.coverSource} alt={movie.title}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="#" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="#" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movie.posterSource} alt={`${movie.title} poster`} width="218"
                  height="327"/>
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <MoviePageTabs
                    activeTab={this.state.activeTab}
                    tabs={tabs}
                    className={MoviePageTabClassNames}
                    onTabClick={this._handleTabClick}
                  />
                </nav>
                {this._getCurrentMoviePageMarkup()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList
              movies={moviesLikeThis}
              onMovieCardClick={onMovieCardClick}
            />
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="#" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

MoviePage.propTypes = {
  movie: MoviePropTypes.movie,
  moviesLikeThis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MoviePage;
