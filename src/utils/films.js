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
      posterSource: movie.posterSource,
    };
  });
};

export const getMoviePromoMode = (sourceMovies, index) => {
  const movie = sourceMovies[index];
  return {
    id: movie.id,
    title: movie.title,
    genre: movie.genre,
    posterSource: movie.posterSource,
    coverSource: movie.coverSource,
    year: movie.year
  };
};
