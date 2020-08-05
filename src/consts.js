import PropTypes from 'prop-types';

export const START_MOVIE_COUNT = 8;
export const PROMO_MOCK_INDEX = 8;
export const PREVIEW_MOVIE_DELAY = 1000;
export const SHORT_ACTORS_LIST_COUNT = 4;
export const MOVIE_REVIEWS_COLUMN_COUNT = 2;
export const MOVIE_LIKE_THIS_COUNT = 4;
export const ALL_GENRES = `All genres`;
export const MAX_GENRE_COUNT = 9;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 400;
export const REVIEW_STARS_COUNT = 5;
export const HOST_NAME = `https://4.react.pages.academy`;

export const EMPTY_PROMO_MOVIE = {
  backgroundImage: ``,
  title: ``,
  posterImage: ``,
  genre: ``,
  released: 0,
  videoLink: ``,
  previewImage: ``,
  previewVideoLink: ``,
};

export const PageKind = {
  MAIN: `main`,
  MOVIE_PAGE: `moviePage`,
  PLAYER: `player`,
  SIGN_IN: `signIn`,
  ADD_REVIEW: `addReview`,
};

export const MoviePageTabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const MoviePageTabClassNames = {
  list: `movie-nav__list`,
  item: `movie-nav__item`,
  activeItem: `movie-nav__item--active`,
  link: `movie-nav__link`
};

export const GenreTabClassNames = {
  list: `catalog__genres-list`,
  item: `catalog__genres-item`,
  activeItem: `catalog__genres-item--active`,
  link: `catalog__genres-link`
};


export const MoviePropTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date),
      score: PropTypes.number.isRequired,
    })).isRequired
  }).isRequired
};

