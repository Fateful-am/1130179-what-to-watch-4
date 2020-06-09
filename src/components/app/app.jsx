import React from "react";
import Main from '../main/main.jsx';


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {genre, title, releaseDate} = props;
  return (
    <Main
      genre = {genre}
      title = {title}
      releaseDate = {releaseDate}
    />
  );
};


export default App;
