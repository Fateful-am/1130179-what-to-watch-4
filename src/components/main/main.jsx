import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';
import {GenreTabClassNames, HOST_NAME} from '../../consts';
import Tabs from '../tabs/tabs.jsx';
import {ActionCreator} from '../../reducer/movie/movie';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import {getActiveGenre, getNeedShowMoreButton, getRenderedMovieCount} from '../../reducer/movie/selectors';
import {getAllGenres, getPromoMovie} from '../../reducer/data/selectors';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';

const Main = ({authorizationStatus, promoMovie, allGenres, activeGenre, needShowMoreButton, renderedMovieCount,
  onGenreTabClick, onShowMoreButtonClick, onSignInClick, avatarUrl}) => {
  const renderAvatar = (src, onClick) => {
    return (
      <div
        className="user-block__avatar"
        onClick={onClick}
      >
        <img src={src} alt="User avatar" width="63" height="63"/>
      </div>
    );
  };

  const renderSignIn = (onClick) => {
    const handleLinkClick = (evt) => {
      evt.preventDefault();
      onClick();
    };

    return (
      <a
        href="#"
        className="user-block__link"
        onClick={handleLinkClick}
      >
        Sign in
      </a>
    );
  };

  const handleShowMoreButtonClick = () => {
    onShowMoreButtonClick(renderedMovieCount);
  };

  const userLoginState = authorizationStatus === AuthorizationStatus.AUTH
    ? renderAvatar(`${HOST_NAME}${avatarUrl}`, ()=>{})
    : renderSignIn(onSignInClick);

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          {userLoginState}
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterImage}
              alt={`${promoMovie.title} poster`}
              width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.released}</span>
            </p>

            <MovieCardButtons />

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Tabs
          activeTab={activeGenre}
          tabs={allGenres}
          onTabClick={onGenreTabClick}
          className={GenreTabClassNames}
        />

        <MoviesList />

        {needShowMoreButton && <ShowMoreButton onClick={handleShowMoreButtonClick}/>}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
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
  </>;
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  promoMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
  allGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  needShowMoreButton: PropTypes.bool.isRequired,
  renderedMovieCount: PropTypes.number.isRequired,

  onGenreTabClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    avatarUrl: getUserData(state).avatarUrl,
    promoMovie: getPromoMovie(state),
    allGenres: getAllGenres(state),
    activeGenre: getActiveGenre(state),
    needShowMoreButton: getNeedShowMoreButton(state),
    renderedMovieCount: getRenderedMovieCount(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },

  onShowMoreButtonClick(renderedMovieCount) {
    dispatch(ActionCreator.showMoreMovies(renderedMovieCount));
  },

  onSignInClick() {
    dispatch(ActionCreator.signIn());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

