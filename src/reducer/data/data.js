import {extend} from '../../utils/helpers.js';
import {ActionCreator as MovieActionCreator} from '../movie/movie';

const initialState = {
  promoMovieId: -1,
  movies: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadPromo: (movie) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: movie,
    };
  },

  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  },
};

const getRatingLevel = (score) => {
  if (score < 3) {
    return `Bad`;
  } else if (score >= 3 && score < 5) {
    return `Normal`;
  } else if (score >= 5 && score < 8) {
    return `Good`;
  } else if (score >= 8 && score < 10) {
    return `Very good`;
  }
  return `Awesome`;
};

export const convertToLocalReviews = (serverReviews) => {
  const localReviews = [];
  serverReviews.forEach((serverReview) => {
    localReviews.push({
      text: serverReview[`comment`],
      author: serverReview[`user`][`name`],
      date: new Date(serverReview[`date`]),
      score: serverReview.rating,
    });
  });
  return localReviews;
};


export const convertToLocalMovieData = (serverMovieData) => {
  const score = parseFloat(serverMovieData[`rating`]);
  return {
    id: serverMovieData[`id`],
    title: serverMovieData[`name`],
    genre: serverMovieData[`genre`],
    released: serverMovieData[`released`],
    posterImage: serverMovieData[`poster_image`],
    backgroundImage: serverMovieData[`background_image`],
    previewImage: serverMovieData[`preview_image`],
    previewVideoLink: serverMovieData[`preview_video_link`],
    videoLink: serverMovieData[`video_link`],
    rating: {
      score,
      level: getRatingLevel(score),
      count: serverMovieData[`scores_count`],
    },
    descriptions: [serverMovieData[`description`]],
    director: serverMovieData[`director`],
    starring: serverMovieData[`starring`].join(`, `),
    runTime: serverMovieData[`run_time`],
    reviews: [],
  };
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = [];
        response.data.forEach((serverMovieData) => movies.push(convertToLocalMovieData(serverMovieData)));
        dispatch(ActionCreator.loadMovies(movies));
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoMovie = convertToLocalMovieData(response.data);
        dispatch(ActionCreator.loadPromo(promoMovie));
      });
  },

  addReview: (reviewData) => (dispatch, getState, api) => {
    return api.post(`/comments/${reviewData.movieId}`, {
      rating: reviewData.rating,
      comment: reviewData.comment,
    })
      .then((response) => {
        dispatch(ActionCreator.loadComments({
          movieId: reviewData.movieId,
          comments: convertToLocalReviews(response.data),
        }));
        dispatch(MovieActionCreator.gotoPreviousPage());
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoMovieId: action.payload.id,
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        movies: state.movies.reduce((newMovies, currentMovie) => {
          if (currentMovie.id === action.payload.movieId) {
            newMovies.push(extend(currentMovie, {
              reviews: action.payload.comments,
            }));
          } else {
            newMovies.push(currentMovie);
          }

          return newMovies;
        }, [])
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
