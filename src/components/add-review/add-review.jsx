import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import UserStatus from '../user-status/user-status.jsx';
import {AppRoute, MOVIE_NOT_FOUND_MESSAGE, MoviePropTypes} from '../../consts';
import history from '../../history';
import {Link} from 'react-router-dom';

const AddReview = (props) => {
  const {movie, children} = props;

  const handleBreadcrumbsBackClick = (evt) => {
    evt.preventDefault();
    history.push(`${AppRoute.FILM}/${movie.id}`);
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
              to={`${AppRoute.FILM}/${movie.id}`}
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

AddReview.propTypes = {
  movie: MoviePropTypes.movie,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default AddReview;
