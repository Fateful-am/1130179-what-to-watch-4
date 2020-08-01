import {extend} from '../../utils/helpers.js';
// import {mockMovies} from '../../mocks/films';

const initialState = {
  promoMovieId: -1,
  movies: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
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

// const convertToLocalReviewData = (serverReviewData) => {
//   return {
//     text: serverReviewData[`comment`],
//     author: serverReviewData[`user`][`name`],
//     date: new Date(serverReviewData[`date`]),
//     score: serverReviewData.rating,
//   };
// };

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
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
