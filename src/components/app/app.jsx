import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {PageKind} from '../../consts';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withMoviePage from '../../hocs/with-movie-page/with-movie-page';

const MoviePageWrapped = withMoviePage(MoviePage);

class App extends PureComponent {
  _stateRender() {
    switch (this.props.currentPage) {
      case PageKind.MAIN:
        return (
          <Main />
        );

      case PageKind.MOVIE_PAGE:
        return (
          <MoviePageWrapped />
        );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._stateRender()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePageWrapped />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
});

export {App};
export default connect(mapStateToProps)(App);
