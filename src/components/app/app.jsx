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
import withBigVideoPlayer from '../../hocs/with_big_video_player/with_big_video_player';

const MoviePageWrapped = withMoviePage(MoviePage);
const BigPlayerWrapped = withBigVideoPlayer(BigVideoPlayer);

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
          <BigPlayerWrapped
            videoLink={movieForPlay.videoLink}
            previewImage={`img/player-poster.jpg`}
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
            <BigPlayerWrapped
              videoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
              previewImage={`img/macbeth.jpg`}
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
