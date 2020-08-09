import * as React from 'react';
import {connect} from 'react-redux';
import {getIsFavoriteMovie} from '../../reducer/movie/selectors';
import {AppRoute, MovieStatus} from '../../consts';
import {Operation as DataOperation} from '../../reducer/data/data';
import {Link} from 'react-router-dom';
import history from '../../history';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';
import {pushHistory} from '../../utils/helpers';

interface Props {
  authorizationStatus: string;
  movieId: number;
  movieStatus: number;
  onMyListClick: (movieId: number, status: number) => void;
  children: React.ReactNode | React.ReactNode[];
}

const MovieCardButtons: React.FunctionComponent<Props> = (props: Props) => {
  const {movieId, onMyListClick, movieStatus} = props;
  const historyPushUrl = `${AppRoute.PLAYER}/${movieId}`;

  const getReverseMovieStatus = (status) => {
    switch (status) {
      case MovieStatus.NOT_FAVORITE:
        return MovieStatus.FAVORITE;
      default:
        return MovieStatus.NOT_FAVORITE;
    }
  };

  const handleMyListClick = (evt) =>{
    const {authorizationStatus} = props;
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onMyListClick(movieId, getReverseMovieStatus(movieStatus));
      return;
    }
    history.push(AppRoute.SIGN_IN);
  };

  const handlePlayButtonClick = (evt) => {
    evt.preventDefault();
    pushHistory(historyPushUrl);
  };

  const myListImg = movieStatus === MovieStatus.FAVORITE ? `#in-list` : `#add`;
  return (
    <div className="movie-card__buttons">
      <Link to={historyPushUrl}
        className="btn btn--play movie-card__button"
        type="button"
        onClick={handlePlayButtonClick}
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list movie-card__button" type="button"
        onClick={handleMyListClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={myListImg}/>
        </svg>
        <span>My list</span>
      </button>
      {props.children}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const {movieId} = props;
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    movieStatus: getIsFavoriteMovie(state, movieId),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMyListClick(movieId, status) {
    dispatch(DataOperation.changeMovieStatus(movieId, status));
  },
});

export {MovieCardButtons};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
