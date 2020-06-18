import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {mockMovies} from './mocks/films';

const promoMovie = {
  genre: `Drama`,
  title: `The Grand Budapest Hotel`,
  posterSource: `img/the-grand-budapest-hotel-poster.jpg`,
  year: 2014
};

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={mockMovies}
    />,
    document.querySelector(`#root`)
);
