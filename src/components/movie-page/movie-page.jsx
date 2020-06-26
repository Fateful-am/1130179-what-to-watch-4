import React from 'react';
import PropTypes from 'prop-types';
import {MoviePageTabNames, SHORT_ACTORS_LIST_COUNT, MOVIE_REVIEWS_COLUMN_COUNT} from '../../consts.js';
import MoviePageTabs from '../movie-page-tabs/movie-page-tabs.jsx';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);

    this.state = {
      activeTab: `Overview`,
    };
  }

  _handleTabClick(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  _getOverviewMarkup() {
    const {movie} = this.props;
    const actors = movie.starring.split(`, `);
    const shortActors = actors.length > SHORT_ACTORS_LIST_COUNT ? `${actors.slice(0, SHORT_ACTORS_LIST_COUNT).join(`, `)} and other` : movie.starring;

    return (
      <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movie.rating.level}</span>
          <span className="movie-rating__count">{`${movie.rating.count} ratings`}</span>
        </p>
      </div>
      <div className="movie-card__text">
        {
          movie.descriptions.map((description, i) => {
            return (
              <p key={`${description}-${i}`}>{description}</p>
            );
          })
        }
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {shortActors}</strong></p>
      </div>
      </>
    );
  }
  _getDetailsMarkup() {
    const {movie} = this.props;

    const actors = movie.starring.split(`, `).map((actor, i, array) => {
      return (
        <React.Fragment key={`actor-${i}-${movie.title}`}>
          {i < array.length - 1 ? `${actor},` : actor}
          {(() => i === array.length - 1 ? null : <br/>)()}
        </React.Fragment>
      );
    });

    return (
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {actors}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{movie.runTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movie.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.year}</span>
          </p>
        </div>
      </div>
    );
  }

  _getReviewsMarkup() {
    const {movie} = this.props;

    const renderReviews = (columnNum, reviews) => {
      return (
        reviews.map((review, i) => {
          return (
            <div
              key={`review-${columnNum}-${i}-${movie.title}`}
              className="review"
            >
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.score}</div>
            </div>
          );
        })
      );
    };

    const renderColumns = (columns) => {
      return (
        columns.map((column, i) => {
          return (
            <div
              key={`column-${i}-${movie.title}`}
              className="movie-card__reviews-col"
            >
              {renderReviews(i, column)}
            </div>
          );
        })
      );
    };

    const columns = [];
    const reviewsPerColumn = Math.ceil(movie.reviews.length / MOVIE_REVIEWS_COLUMN_COUNT);
    for (let i = 0; i < MOVIE_REVIEWS_COLUMN_COUNT; i++) {
      columns.push(movie.reviews.slice(i * reviewsPerColumn, (i + 1) * reviewsPerColumn));
    }

    return (
      <div className="movie-card__reviews movie-card__row">
        {renderColumns(columns)}
      </div>
    );
  }

  render() {
    const {movie} = this.props;
    const tabs = Object.values(MoviePageTabNames);
    let movieCardMarkup;
    switch (this.state.activeTab) {
      case MoviePageTabNames.REVIEWS:
        movieCardMarkup = this._getReviewsMarkup();
        break;
      case MoviePageTabNames.OVERVIEW:
        movieCardMarkup = this._getOverviewMarkup();
        break;
      default:
        movieCardMarkup = this._getDetailsMarkup();
    }

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
                <MoviePageTabs
                  activeTab={this.state.activeTab}
                  tabs={tabs}
                  onTabClick={this._handleTabClick}
                />
                {movieCardMarkup}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                    alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="#">Fantastic Beasts: The Crimes of
                    Grindelwald</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="#">Bohemian Rhapsody</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="#">Macbeth</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="#">Aviator</a>
                </h3>
              </article>
            </div>
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
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    posterSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
    coverSource: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired
};

export default MoviePage;
