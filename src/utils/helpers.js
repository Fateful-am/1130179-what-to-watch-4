import moment from 'moment';

export const convertToImageName = (movieName) => {
  return movieName.toLowerCase().split(` `).join(`-`).split(`:`).join(``);
};

export const getMovieById = (movies, id) => {
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex > -1) {
    return movies[movieIndex];
  }
  return null;
};

export const formatDuration = (duration) => {
  if (duration < 60) {
    return moment.utc(moment.duration(duration, `minutes`).asMilliseconds()).format(`m[m]`);
  }
  return moment.utc(moment.duration(duration, `minutes`).asMilliseconds()).format(`H[h] m[m]`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
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
