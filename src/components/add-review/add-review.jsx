import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import UserStatus from '../user-status/user-status.jsx';
import {MoviePropTypes} from '../../consts';

const AddReview = (props) => {
  const {movie, children, onBreadcrumbsBackClick} = props;

  const handleBreadcrumbsBackClick = (evt) => {
    evt.preventDefault();
    onBreadcrumbsBackClick();
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt={movie.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo
            inFooter={false}>
          </Logo>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a
                  href="#"
                  className="breadcrumbs__link"
                  onClick={handleBreadcrumbsBackClick}
                >
                  {movie.title}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserStatus/>

        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt={`${movie.title} poster`} width="218" height="327"/>
        </div>
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
  onBreadcrumbsBackClick: PropTypes.func.isRequired,
};

export default AddReview;
