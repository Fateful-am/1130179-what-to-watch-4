import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {mockMovieCards} from './mocks/films';

const movieCards = mockMovieCards;

const promoMovieCard = {
  genre: `Drama`,
  title: `The Grand Budapest Hotel`,
  year: 2014
};

ReactDOM.render(
    <App
      promoMovieCard={promoMovieCard}
      movieCards={movieCards}
    />,
    document.querySelector(`#root`)
);
