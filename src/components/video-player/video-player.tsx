import * as React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props)=> {
  const {onMouseHover, onMouseLeave, children} = props;

  return (
    <div className="small-movie-card__image"
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

VideoPlayer.propTypes = {
  onMouseHover: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default VideoPlayer;
