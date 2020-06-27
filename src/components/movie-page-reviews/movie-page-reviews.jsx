import React from 'react';
import {MOVIE_REVIEWS_COLUMN_COUNT, MoviePropTypes} from '../../consts';
import moment from 'moment';

const MoviePageReviews = ({movie}) => {

  const renderColumns = (columns) => {
    return (
      columns.map((column, i) => {
        return (
          <div
            key={`column-${i}-${movie.id}`}
            className="movie-card__reviews-col"
          >
            {renderReviews(i, column)}
          </div>
        );
      })
    );
  };

  const renderReviews = (columnNum, reviews) => {
    return (
      reviews.map((review, i) => {
        return (
          <div
            key={`review-${columnNum}-${i}-${movie.id}`}
            className="review"
          >
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime={moment(review.date).format(`YYYY-MM-DD`)}>{moment(review.date).format(`MMMM DD, YYYY`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.score}</div>
          </div>
        );
      })
    );
  };

  const columns = [];
  const reviewsPerColumn = Math.ceil(movie.reviews.length / MOVIE_REVIEWS_COLUMN_COUNT);
  for (let i = 0; i < MOVIE_REVIEWS_COLUMN_COUNT; i++) {
    columns.push(movie.reviews.slice(i * reviewsPerColumn, (i + 1) * reviewsPerColumn));
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      {renderColumns(columns)}
    </div>
  );
};

MoviePageReviews.propTypes = MoviePropTypes;

export default MoviePageReviews;