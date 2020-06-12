import React from "react";
import Main from '../main/main.jsx';


const App = (props) => {
// eslint-disable-next-line react/prop-types
  const {movieCard, smallMovieCards} = props;
  return (
    <Main
      movieCard={movieCard}
      smallMovieCards={smallMovieCards}
    />
  );
};


export default App;
