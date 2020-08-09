import * as React from 'react';
import {connect} from 'react-redux';
import {getFavoriteMovies} from '../../reducer/movie/selectors';
import Logo from '../logo/logo';
import UserStatus from '../user-status/user-status';
import MoviesList from '../movies-list/movies-list';
import {MoviePropTypes} from '../../types';

interface Props {
  favoriteMovies: MoviePropTypes[],
}

const MyList: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => {
  return ({
    favoriteMovies: getFavoriteMovies(state),
  });
};

export {MyList};
export default connect(mapStateToProps)(MyList);
