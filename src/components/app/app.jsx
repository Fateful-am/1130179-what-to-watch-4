import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {PageKind} from '../../consts';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withMoviePage from '../../hocs/with-movie-page/with-movie-page';
import BigVideoPlayer from '../big-video-player/big-video-player.jsx';
import withBigVideoPlayer from '../../hocs/with-big-video-player/with-big-video-player.js';
import {ActionCreator} from '../../reducer/movie/movie.js';
import {getCurrentPage} from '../../reducer/movie/selectors.js';
import {getCurrentMovie} from '../../reducer/data/selectors.js';
import SignIn from '../sign-in/sign-in.jsx';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Operation as UserOperation} from "../../reducer/user/user.js";
import AddReview from '../add-review/add-review.jsx';

const MoviePageWrapped = withMoviePage(MoviePage);
const BigPlayerWrapped = withBigVideoPlayer(BigVideoPlayer);

class App extends PureComponent {
  _stateRender() {
    const {login, currentPage, movieForPlay, onAddReviewBreadcrumbsBackClick} = this.props;
    switch (currentPage) {
      case PageKind.MAIN:
        return (
          <Main/>
        );

      case PageKind.MOVIE_PAGE:
        return (
          <MoviePageWrapped/>
        );

      case PageKind.PLAYER:
        return (
          <BigPlayerWrapped
            videoLink={movieForPlay.videoLink}
            previewImage={movieForPlay.previewImage}
            title={movieForPlay.title}
            onExitButtonClick={this.props.onPlayerExitButtonClick}
          />
        );
      case PageKind.SIGN_IN:
        return (
          <SignIn
            onSubmit={login}
          />
        );
      case PageKind.ADD_REVIEW:
        return (
          <AddReview
            movie={movieForPlay}
            onBreadcrumbsBackClick={onAddReviewBreadcrumbsBackClick}
          >
          </AddReview>

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
            <MoviePageWrapped/>
          </Route>
          <Route exact path="/dev-player">
            <BigPlayerWrapped
              videoLink={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
              previewImage={`img/player-poster.jpg`}
              title={`Transpotting`}
              onExitButtonClick={this.props.onPlayerExitButtonClick}
            />
          </Route>
          <Route exact path="/dev-signIn">
            <SignIn
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  movieForPlay: PropTypes.shape({
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onPlayerExitButtonClick: PropTypes.func.isRequired,
  onAddReviewBreadcrumbsBackClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    currentPage: getCurrentPage(state),
    movieForPlay: getCurrentMovie(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onPlayerExitButtonClick() {
    dispatch(ActionCreator.exitPlayer());
  },

  onAddReviewBreadcrumbsBackClick() {
    dispatch(ActionCreator.gotoPreviousPage());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
