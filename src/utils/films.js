export const MovieInfoMode = {
  CARD: `card`,
  PROMO: `promo`,
  OVERVIEW: `overview`,
  DETAIL: `detail`,
  REVIEWS: `reviews`
};

export const getMovies = (sourceMovies, sliceFrom, count) => {
  return sourceMovies.slice(sliceFrom, sliceFrom + count).map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      posterImage: movie.posterImage,
    };
  });
};

export const getMoviePromoMode = (sourceMovies, index) => {
  const movie = sourceMovies[index];
  return {
    id: movie.id,
    title: movie.title,
    genre: movie.genre,
    posterImage: movie.posterImage,
    backgroundImage: movie.backgroundImage,
    released: movie.released
  };
};
