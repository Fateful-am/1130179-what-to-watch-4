import * as React from 'react';
import {connect} from 'react-redux';
import {
  MoviePageTabNames,
  MoviePageTabClassNames,
  AppRoute,
  MOVIE_NOT_FOUND_MESSAGE
} from '../../consts';
import Tabs from '../tabs/tabs';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviesList from '../movies-list/movies-list';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import {getMovies} from '../../reducer/data/selectors';
import UserStatus from '../user-status/user-status';
import Logo from '../logo/logo';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {ActionCreator} from '../../reducer/movie/movie';
import {Operation as DataOperation} from '../../reducer/data/data';
import {getMovieById, pushHistory} from '../../utils/helpers';
import {getLikeThisMoviesExceptCurrent} from '../../reducer/movie/selectors';
import {Link} from 'react-router-dom';
import {MoviePropTypes} from '../../types';

interface Props {
  authorizationStatus: string,
  movies: MoviePropTypes[],
  activeTab: string,
  onMovieLoad: (genre: string) => void,
  onTabClick: () => void,
  onLoadReviews: (movieId: number) => void,
  setDefaultTab?: () => void,
  match: {
    params: {
      id: string,
    }
  }
  likeThisMovies: MoviePropTypes[],
}

class MoviePage extends React.PureComponent<Props, {}> {
  private needReviewsLoad: boolean;
  private needMovieLoad: boolean;

  constructor(props) {
    super(props);

    this.needReviewsLoad = true;
    this.needMovieLoad = true;

    this._handleAddReviewClick = this._handleAddReviewClick.bind(this);
  }

  _getMovieId(props) {
    return props.match.params.id;
  }

  _getCurrentMovie() {
    const movie = getMovieById(this.props.movies, this._getMovieId(this.props));
    return movie.id > -1 ? movie : null;
  }

  _renderCurrentMoviePage() {
    const {activeTab} = this.props;
    const movie = this._getCurrentMovie();
    switch (activeTab) {
      case MoviePageTabNames.DETAILS:
        return <MoviePageDetails movie={movie} />;
      case MoviePageTabNames.REVIEWS:
        return <MoviePageReviews movie={movie} />;
      default:
        return <MoviePageOverview movie={movie} />;
    }
  }

  _checkMovie() {
    const {onLoadReviews, onMovieLoad} = this.props;
    const movie = this._getCurrentMovie();
    if (movie) {
      if (this.needMovieLoad) {
        onMovieLoad(movie.genre);
        this.needMovieLoad = false;
      }

      if (movie.reviews.length === 0 && this.needReviewsLoad) {
        onLoadReviews(movie.id);
        this.needReviewsLoad = false;
      }
    }
  }
  componentDidMount() {
    this._checkMovie();
  }

  componentDidUpdate(prevProps) {
    if (this._getMovieId(prevProps) !== this._getMovieId(this.props)) {
      this.props.setDefaultTab();
    }

    this._checkMovie();
  }

  _getHistoryPushUrl(movieId) {
    return AppRoute.ADD_REVIEW.replace(`:id`, movieId);
  }

  _handleAddReviewClick(evt) {
    evt.preventDefault();
    pushHistory(this._getHistoryPushUrl(this._getMovieId(this.props)));
  }

  _renderAddReviewClick(movieId) {
    return (
      <Link
        to={this._getHistoryPushUrl(movieId)}
        href="#"
        className="btn movie-card__button"
        onClick={this._handleAddReviewClick}
      >
          Add review
      </Link>
    );
  }

  _renderBackgroundAndTitle() {
    const movie = this._getCurrentMovie();
    if (movie) {
      return (
        <img src={movie.backgroundImage} alt={movie.title}/>
      );
    }

    return null;
  }

  _renderMovieCardDesc() {
    const movie = this._getCurrentMovie();
    if (movie) {
      return (
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{movie.genre}</span>
            <span className="movie-card__year">{movie.released}</span>
          </p>

          <MovieCardButtons
            movieId={movie.id}
          >
            {this._renderAddReviewClick(movie.id)}
          </MovieCardButtons>
        </div>
      );
    }

    return (
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{MOVIE_NOT_FOUND_MESSAGE}</h2>
      </div>
    );
  }

  _renderMovieCardInfo() {
    const movie = this._getCurrentMovie();
    const {activeTab, onTabClick} = this.props;
    const tabs: string[] = Object.values(MoviePageTabNames);

    if (movie) {
      return (
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movie.posterImage} alt={`${movie.title} poster`} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <Tabs
                activeTab={activeTab}
                tabs={tabs}
                className={MoviePageTabClassNames}
                onTabClick={onTabClick}
              />
            </nav>
            {this._renderCurrentMoviePage()}
          </div>
        </div>
      );
    }

    return null;
  }

  _renderLikeThisSection() {
    const movie = this._getCurrentMovie();
    const {likeThisMovies} = this.props;
    if (movie) {
      return (
        <section className="catalog catalog--like-this">
          <MoviesList
            renderedMovies={likeThisMovies}
          >
            <h2 className="catalog__title">More like this</h2>
          </MoviesList>
        </section>
      );
    }

    return null;

  }

  render() {
    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              {this._renderBackgroundAndTitle()}
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo inFooter={false}/>

              <UserStatus/>

            </header>

            <div className="movie-card__wrap">
              {this._renderMovieCardDesc()}
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            {this._renderMovieCardInfo()}
          </div>
        </section>

        <div className="page-content">
          {this._renderLikeThisSection()}

          <footer className="page-footer">
            <Logo inFooter={true}/>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const {match} = props;
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    movies: getMovies(state),
    likeThisMovies: getLikeThisMoviesExceptCurrent(state, match.params.id),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMovieLoad(genre) {
    dispatch(ActionCreator.changeMovieGenre(genre));
  },

  onLoadReviews(movieId) {
    dispatch(DataOperation.loadReviews(movieId));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
