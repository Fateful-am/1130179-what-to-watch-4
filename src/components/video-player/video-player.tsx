import * as React from 'react';

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

export default VideoPlayer;
