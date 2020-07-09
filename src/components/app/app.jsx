import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {PageKind} from '../../consts';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withMoviePage from '../../hocs/with-movie-page/with-movie-page';
import BigVideoPlayer from '../big-video-player/big-video-player.jsx';
import {getMovieById} from '../../utils/helpers';

const MoviePageWrapped = withMoviePage(MoviePage);

class App extends PureComponent {
  _stateRender() {
    const {currentPage, movieForPlay} = this.props;
    switch (currentPage) {
      case PageKind.MAIN:
        return (
          <Main />
        );

      case PageKind.MOVIE_PAGE:
        return (
          <MoviePageWrapped />
        );

      case PageKind.PLAYER:
        return (
          <BigVideoPlayer
            videoLink={movieForPlay.videoLink}
            previewImage={movieForPlay.previewImage}
            playProgress={0}
          />
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
          <Route exact path="/dev-player">
            <BigVideoPlayer
              videoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
              previewImage={`img/macbeth.jpg`}
              playProgress={25}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
  movieForPlay: PropTypes.shape({
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => {
  const movieForPlay = state.currentMovieId === 0 || state.currentMovieId
    ? getMovieById(state.movies, state.currentMovieId)
    : {videoLink: ``,
      previewImage: ``};
  return ({
    currentPage: state.currentPage,
    movieForPlay,
  });
};

export {App};
export default connect(mapStateToProps)(App);
