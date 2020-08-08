import * as React from 'react';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list';
import {GenreTabClassNames} from '../../consts';
import Tabs from '../tabs/tabs';
import {ActionCreator} from '../../reducer/movie/movie';
import ShowMoreButton from '../show-more-button/show-more-button';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import {
  getNeedShowMoreButton,
  getMainPageMovieCardCount,
  getMainPageGenre, getMainPageGenreMovies
} from '../../reducer/movie/selectors';
import {getAllGenres, getPromoMovie} from '../../reducer/data/selectors';
import UserStatus from '../user-status/user-status';
import Logo from '../logo/logo';

const Main = ({promoMovie, allGenres, activeGenre, needShowMoreButton, mainPageMovieCardCount,
  onGenreTabClick, onShowMoreButtonClick, mainPageMovies}) => {

  const handleShowMoreButtonClick = () => {
    onShowMoreButtonClick(mainPageMovieCardCount);
  };

  const renderPromo = () => {
    if (promoMovie === -1) {
      return (
        <div className="movie-card__info">
          <div className="movie-card__poster">
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">Loading</h2>
          </div>
        </div>
      );
    }
    return (
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

          <MovieCardButtons
            movieId={promoMovie.id}
          >
          </MovieCardButtons>

        </div>
      </div>

    );
  };

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        {promoMovie.id > -1 && <img src={promoMovie.backgroundImage} alt={promoMovie.title}/>}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo inFooter={false}/>

        <UserStatus/>

      </header>

      <div className="movie-card__wrap">
        {renderPromo()}
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

        <MoviesList
          renderedMovies={mainPageMovies}
        >
        </MoviesList>

        {needShowMoreButton && <ShowMoreButton onClick={handleShowMoreButtonClick}/>}
      </section>

      <footer className="page-footer">
        <Logo inFooter={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

const mapStateToProps = (state) => {
  return ({
    promoMovie: getPromoMovie(state),
    allGenres: getAllGenres(state),
    activeGenre: getMainPageGenre(state),
    needShowMoreButton: getNeedShowMoreButton(state),
    mainPageMovieCardCount: getMainPageMovieCardCount(state),
    mainPageMovies: getMainPageGenreMovies(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(genre) {
    dispatch(ActionCreator.changeMainPageGenre(genre));
  },

  onShowMoreButtonClick(mainPageMovieCardCount) {
    dispatch(ActionCreator.showMoreMovies(mainPageMovieCardCount));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

