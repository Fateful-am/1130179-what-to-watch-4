import * as React from 'react';
import VideoPlayer from '../video-player/video-player';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {pushHistory} from '../../utils/helpers';

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

interface Props {
  movieId: number;
  title: string;
  previewImage: string;
  previewVideoLink: string;
  children?: {};
}

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {title, previewImage, previewVideoLink, movieId} = props;

  const historyPushUrl = `${AppRoute.FILM}/${movieId}`;
  const handleClick = (evt) => {
    evt.preventDefault();
    pushHistory(historyPushUrl);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={handleClick}
    >
      <Link to={historyPushUrl}>
        <VideoPlayerWrapped
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={historyPushUrl}
          className="small-movie-card__link"
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default React.memo(MovieCard);
