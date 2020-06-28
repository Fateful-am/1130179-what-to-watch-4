import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {mockMovies} from './mocks/films';
import {PROMO_MOCK_INDEX} from './consts.js';

ReactDOM.render(
    <App
      promoMovie={mockMovies[PROMO_MOCK_INDEX]}
      movies={mockMovies}
    />,
    document.querySelector(`#root`)
);
