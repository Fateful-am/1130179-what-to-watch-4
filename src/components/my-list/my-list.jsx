import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MoviePropTypes} from '../../consts';
import {getFavoriteMovies} from '../../reducer/movie/selectors';
import Logo from '../logo/logo.jsx';
import UserStatus from '../user-status/user-status.jsx';
import MoviesList from '../movies-list/movies-list.jsx';

function MyList(props) {
  const {favoriteMovies} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo inFooter={false}/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserStatus/>

      </header>

      <MoviesList
        renderedMovies={favoriteMovies}>
      </MoviesList>

      <footer className="page-footer">
        <Logo inFooter={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(MoviePropTypes.movie).isRequired,
};

const mapStateToProps = (state) => {
  return ({
    favoriteMovies: getFavoriteMovies(state),
  });
};

export {MyList};
export default connect(mapStateToProps)(MyList);
