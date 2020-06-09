import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoMovieInfo = {
  GENRE: `Drama`,
  TITLE: `The Grand Budapest Hotel`,
  RELEASE_DATE: `2014`
};

ReactDOM.render(
    <App
      genre={PromoMovieInfo.GENRE}
      title={PromoMovieInfo.TITLE}
      releaseDate={PromoMovieInfo.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
