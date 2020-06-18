import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {promoMovie, movies} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoMovie={promoMovie}
              movies={movies}
            />
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movie={promoMovie}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterSource: PropTypes.string.isRequired,
    coverSource: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewSource: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
