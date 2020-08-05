import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {MoviePropTypes, PageKind} from '../../consts';
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
import {Operation as DataOperation} from '../../reducer/data/data.js';
import AddReview from '../add-review/add-review.jsx';
import withAddReview from '../../hocs/with-add-review/with-add-review';
import PrivateRoute from "../private-route/private-route.jsx";
import history from "../../history.js";
import {AppRoute} from "../../consts.js";
import {TEST_DATA} from '../../utils/test-data';

const MoviePageWrapped = withMoviePage(MoviePage);
const BigPlayerWrapped = withBigVideoPlayer(BigVideoPlayer);
const AddReviewWrapper = withAddReview(AddReview);

class App extends PureComponent {
  _stateRender() {
    const {login, currentPage, movieForPlay, onAddReviewBreadcrumbsBackClick, onReviewFormSubmit} = this.props;
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
        return history.push(AppRoute.SIGN_IN);
      case PageKind.ADD_REVIEW:
        return (
          <AddReviewWrapper
            movie={movieForPlay}
            onBreadcrumbsBackClick={onAddReviewBreadcrumbsBackClick}
            onSubmit={onReviewFormSubmit}
          >
          </AddReviewWrapper>

        );
    }

    return null;
  }

  render() {
    const {login, onAddReviewBreadcrumbsBackClick, onReviewFormSubmit, movieForDev} = this.props;
    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            {this._stateRender()}
          </Route>

          <Route exact path={AppRoute.SIGN_IN}>
            <SignIn
              onSubmit={login}
            />
          </Route>
        </Switch>
      </Router>
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
  movieForDev: MoviePropTypes.movie,
  onPlayerExitButtonClick: PropTypes.func.isRequired,
  onAddReviewBreadcrumbsBackClick: PropTypes.func.isRequired,
  onReviewFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    currentPage: getCurrentPage(state),
    movieForPlay: getCurrentMovie(state),
    movieForDev: TEST_DATA.promoMovie,
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
  },

  onReviewFormSubmit(reviewData) {
    dispatch(DataOperation.addReview(reviewData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
