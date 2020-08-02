import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';
import {GenreTabClassNames} from '../../consts';
import Tabs from '../tabs/tabs.jsx';
import {ActionCreator} from '../../reducer/movie/movie';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import {getActiveGenre, getNeedShowMoreButton, getRenderedMovieCount} from '../../reducer/movie/selectors';
import {getAllGenres, getPromoMovie} from '../../reducer/data/selectors';
import UserStatus from '../user-status/user-status.jsx';

const Main = ({promoMovie, allGenres, activeGenre, needShowMoreButton, renderedMovieCount,
  onGenreTabClick, onShowMoreButtonClick}) => {

  const handleShowMoreButtonClick = () => {
    onShowMoreButtonClick(renderedMovieCount);
  };

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

        <UserStatus/>

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
};

const mapStateToProps = (state) => {
  return ({
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
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

