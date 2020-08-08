import * as React from 'react';
import Logo from '../logo/logo';
import UserStatus from '../user-status/user-status';
import {AppRoute, MOVIE_NOT_FOUND_MESSAGE} from '../../consts';
import {Link} from 'react-router-dom';
import {pushHistory} from '../../utils/helpers';

const AddReview = (props) => {
  const {movie, children} = props;

  const historyPushUrl = `${AppRoute.FILM}/${movie ? movie.id : ``}`;

  const handleBreadcrumbsBackClick = (evt) => {
    evt.preventDefault();
    pushHistory(historyPushUrl);
  };

  const renderBackGround = () =>{
    if (movie) {
      return (
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt={movie.title}/>
        </div>
      );
    }

    return (
      <div className="movie-card__bg">
      </div>
    );
  };

  const renderBreadcrumbs = () => {
    if (movie) {
      return (
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link
              to={historyPushUrl}
              className="breadcrumbs__link"
              onClick={handleBreadcrumbsBackClick}
            >
              {movie.title}
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      );
    }

    return (
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">{MOVIE_NOT_FOUND_MESSAGE}</a>
        </li>
      </ul>
    );
  };

  const renderPoster = () => {
    if (movie) {
      return (
        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt={`${movie.title} poster`} width="218" height="327"/>
        </div>
      );
    }

    return (
      <div className="movie-card__poster movie-card__poster--small">
      </div>
    );
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        {renderBackGround()}

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo
            inFooter={false}>
          </Logo>

          <nav className="breadcrumbs">
            {renderBreadcrumbs()}
          </nav>

          <UserStatus/>

        </header>

        {renderPoster()}
      </div>

      <div className="add-review">
        {children}
      </div>

    </section>

  );
};

export default AddReview;
