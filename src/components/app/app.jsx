import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const smallMovieHeaderHandler = () => {
};

const App = (props) => {
  const {movieCard, smallMovieCards} = props;
  return (
    <Main
      movieCard={movieCard}
      smallMovieCards={smallMovieCards}
      onSmallMovieHeaderClick={smallMovieHeaderHandler}
    />
  );
};

App.propTypes = {
  movieCard: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  smallMovieCards: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
