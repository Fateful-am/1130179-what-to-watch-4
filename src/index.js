import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app.jsx';
import {mockMovies} from './mocks/films';
import {PROMO_MOCK_INDEX} from './consts.js';
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={mockMovies[PROMO_MOCK_INDEX]}
        movies={mockMovies}
      />
    </Provider>,
    document.querySelector(`#root`)
);
