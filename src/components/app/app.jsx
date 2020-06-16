import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({promoMovieCard, movieCards}) => {
  return (
    <Main
      promoMovieCard={promoMovieCard}
      movieCards={movieCards}
    />
  );
};

App.propTypes = {
  promoMovieCard: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  movieCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
