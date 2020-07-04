import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';
import {getSortedUniqueObjectValues} from '../../utils/helpers';
import {ALL_GENRES, MAX_GENRE_COUNT, GenreTabClassNames} from '../../consts';
import Tabs from '../tabs/tabs.jsx';
import {ActionCreator} from '../../reducer';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';

const Main = ({promoMovie, allGenres, activeGenre, needShowMoreButton, onGenreTabClick, onShowMoreButtonClick}) => {
  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.coverSource} alt={promoMovie.title}/>
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
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterSource}
              alt={`${promoMovie.title} poster`}
              width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.year}</span>
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
            </div>
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

        {needShowMoreButton ? <ShowMoreButton onButtonClick={onShowMoreButtonClick}/> : null}
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
    posterSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
    coverSource: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  allGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  needShowMoreButton: PropTypes.bool.isRequired,

  onGenreTabClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const allGenres = getSortedUniqueObjectValues(state.movies, `genre`)
    .slice(0, MAX_GENRE_COUNT);
  allGenres.unshift(ALL_GENRES);

  return ({
    promoMovie: state.promoMovie,
    allGenres,
    activeGenre: state.genre,
    needShowMoreButton: state.genreMovies.length > state.renderedMovieCount,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },

  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreMovies());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

