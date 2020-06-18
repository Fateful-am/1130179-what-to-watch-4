import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {mockMovies} from './mocks/films';
import {START_MOVIE_COUNT, PROMO_MOCK_INDEX} from './consts.js';

ReactDOM.render(
    <App
      promoMovie={mockMovies[PROMO_MOCK_INDEX]}
      movies={mockMovies.slice(0, START_MOVIE_COUNT)}
    />,
    document.querySelector(`#root`)
);
