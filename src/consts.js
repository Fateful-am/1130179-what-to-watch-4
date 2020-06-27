import PropTypes from 'prop-types';

export const START_MOVIE_COUNT = 8;
export const PROMO_MOCK_INDEX = 8;
export const PREVIEW_MOVIE_DELAY = 1000;
export const SHORT_ACTORS_LIST_COUNT = 4;
export const MOVIE_REVIEWS_COLUMN_COUNT = 2;
export const MOVIE_LIKE_THIS_COUNT = 4;

export const PageKind = {
  MAIN: `main`,
  MOVIE_PAGE: `moviePage`
};

export const MoviePageTabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const MoviePropTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    posterSource: PropTypes.string.isRequired,
    previewMovie: PropTypes.string.isRequired,
    coverSource: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.string.isRequired,
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
      score: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired
};
