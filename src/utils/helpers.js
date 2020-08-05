import moment from 'moment';
import {EMPTY_PROMO_MOVIE} from '../consts';

export const convertToImageName = (movieName) => {
  return movieName.toLowerCase().split(` `).join(`-`).split(`:`).join(``);
};

export const getMovieById = (movies, id) => {
  const movieIndex = movies.findIndex((movie) => String(movie.id) === id);
  if (movieIndex > -1) {
    return movies[movieIndex];
  }
  return EMPTY_PROMO_MOVIE;
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

export const smallMovieCards = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];
