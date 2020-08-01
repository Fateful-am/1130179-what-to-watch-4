import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/movie/movie';
import {getMovieIdForPlay} from '../../reducer/movie/selectors';

const MovieCardButtons = (props) => {
  const {movieIdForPlay, onPlayClick} = props;
  const onMyListClick = ()=>{};

  const handlePlayButtonClick = () => {
    onPlayClick(movieIdForPlay);
  };

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
        onClick={onMyListClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>
        <span>My list</span>
      </button>
      {props.children}
    </div>
  );
};

MovieCardButtons.propTypes = {
  movieIdForPlay: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])};

const mapStateToProps = (state) => {
  return ({
    movieIdForPlay: getMovieIdForPlay(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(movieIdForPlay) {
    dispatch(ActionCreator.playMovie(movieIdForPlay));
  },

});
export {MovieCardButtons};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
