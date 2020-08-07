import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import history from '../../history';

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);
const MovieCard = (props) => {
  const {title, previewImage, previewVideoLink, movieId} = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    history.push(`${AppRoute.FILM}/${movieId}`);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={handleClick}
    >
      <Link to={`${AppRoute.FILM}/${movieId}`}>
        <VideoPlayerWrapped
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoute.FILM}/${movieId}`}
          className="small-movie-card__link"
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default React.memo(MovieCard);
