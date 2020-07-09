import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const MovieCardButtons = (props) => {
  const {onPlayClick, onMyListClick} = props;
  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button"
        onClick={onPlayClick}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"/>
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
    </div>
  );
};

MovieCardButtons.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClick() {
    dispatch(ActionCreator.playMovie());
  },

});
export {MovieCardButtons};
export default connect(null, mapDispatchToProps)(MovieCardButtons);
