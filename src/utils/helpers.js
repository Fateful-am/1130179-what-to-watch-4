import moment from 'moment';
import {EMPTY_PROMO_MOVIE, StoreParam} from '../consts';
import LocalStorage from './local-storage';
import history from '../history';

export const wtwLocalStorage = new LocalStorage(`${StoreParam.PREFIX}-${StoreParam.VERSION}`, window.localStorage);

export const getMovieById = (movies, id) => {
  const movieIndex = movies.findIndex((movie) => String(movie.id) === String(id));
  if (movieIndex > -1) {
    return movies[movieIndex];
  }
  return EMPTY_PROMO_MOVIE;
};

export const pushHistory = (url) => {
  wtwLocalStorage.setLastUrl(url);
  history.push(url);
};

export const formatDurationInMinutes = (duration) => {
  if (duration < 60) {
    return moment.utc(moment.duration(duration, `minutes`).asMilliseconds()).format(`m[m]`);
  }
  return moment.utc(moment.duration(duration, `minutes`).asMilliseconds()).format(`H[h] m[m]`);
};

export const formatDurationInSeconds = (duration) => {
  return moment.utc(moment.duration(duration, `seconds`).asMilliseconds()).format(`H:mm:ss`);
};


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getSortedUniqueObjectValues = (arrayOfObjects, key) => {
  return [...new Set(Array.from(arrayOfObjects, (it) => it[key]))]
    .sort();
};
