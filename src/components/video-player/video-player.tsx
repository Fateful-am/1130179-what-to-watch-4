import * as React from 'react';
import {ReactNode} from 'react';

interface Props {
  onMouseHover: () => void,
  onMouseLeave: () => void,
  children: ReactNode,
}

const VideoPlayer: React.FunctionComponent<Props> = (props: Props) => {
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
