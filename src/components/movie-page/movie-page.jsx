import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {MoviePageTabNames, MoviePropTypes, MoviePageTabClassNames} from '../../consts.js';
import Tabs from '../tabs/tabs.jsx';
import MoviePageOverview from '../movie-page-overview/movie-page-overview.jsx';
import MoviePageDetails from '../movie-page-details/movie-page-details.jsx';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import {getCurrentMovie} from '../../reducer/data/selectors';
import UserStatus from '../user-status/user-status.jsx';
import Logo from '../logo/logo.jsx';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {ActionCreator} from '../../reducer/movie/movie';
import {AuthorizationStatus} from '../../reducer/user/user';

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this._handleAddReviewClick = this._handleAddReviewClick.bind(this);

  }
  _renderCurrentMoviePage() {
    const {movie, activeTab} = this.props;

    switch (activeTab) {
      case MoviePageTabNames.DETAILS:
        return <MoviePageDetails movie={movie} />;
      case MoviePageTabNames.REVIEWS:
        return <MoviePageReviews movie={movie} />;
      default:
        return <MoviePageOverview movie={movie} />;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie.id !== this.props.movie.id) {
      this.props.setDefaultTab();
    }
  }

  _handleAddReviewClick(evt) {
    const {onAddReviewClick} = this.props;
    evt.preventDefault();
    onAddReviewClick();
  }

  _renderAddReviewClick() {
    const {authorizationStatus} = this.props;
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <a
          href="#"
          className="btn movie-card__button"
          onClick={this._handleAddReviewClick}
        >
          Add review
        </a>
      );
    }
    return null;
  }

  render() {
    const {movie, activeTab, onTabClick} = this.props;
    const tabs = Object.values(MoviePageTabNames);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.backgroundImage} alt={movie.title}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo inFooter={false}/>

              <UserStatus/>

            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.released}</span>
                </p>

                <MovieCardButtons>
                  {this._renderAddReviewClick()}
                </MovieCardButtons>

              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movie.posterImage} alt={`${movie.title} poster`} width="218"
                  height="327"/>
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
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MoviesList />

          </section>

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

MoviePage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  movie: MoviePropTypes.movie,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onAddReviewClick: PropTypes.func.isRequired,
  setDefaultTab: PropTypes.func,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    movie: getCurrentMovie(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onAddReviewClick() {
    dispatch(ActionCreator.addReview());
  },

});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
