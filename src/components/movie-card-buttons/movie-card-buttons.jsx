import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/movie/movie';
import {getIsFavoriteMovie, getMovieIdForPlay} from '../../reducer/movie/selectors';
import {MovieStatus} from '../../consts';
import {Operation as DataOperation} from '../../reducer/data/data';

const MovieCardButtons = (props) => {
  const {movieIdForPlay, onPlayClick, onMyListClick, movieStatus} = props;

  const getReverseMovieStatus = (status) => {
    switch (status) {
      case MovieStatus.NOT_FAVORITE:
        return MovieStatus.FAVORITE;
      default:
        return MovieStatus.NOT_FAVORITE;
    }
  };

  const handleMyListClick = (evt) =>{
    evt.preventDefault();
    onMyListClick(movieIdForPlay, getReverseMovieStatus(movieStatus));
  };

  const handlePlayButtonClick = () => {
    onPlayClick(movieIdForPlay);
  };

  const myListImg = movieStatus === MovieStatus.FAVORITE ? `#in-list` : `#add`;
  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button"
        onClick={handlePlayButtonClick}
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
        </svg>
        <span>Play</span>
      </button>
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

MovieCardButtons.propTypes = {
  movieIdForPlay: PropTypes.number.isRequired,
  movieStatus: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])};

const mapStateToProps = (state) => {
  return ({
    movieIdForPlay: getMovieIdForPlay(state),
    movieStatus: getIsFavoriteMovie(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(movieIdForPlay) {
    dispatch(ActionCreator.playMovie(movieIdForPlay));
  },

  onMyListClick(movieId, status) {
    dispatch(DataOperation.changeMovieStatus(movieId, status));
  },
});
export {MovieCardButtons};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
