import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withMoviePage from '../../hocs/with-movie-page/with-movie-page';
import BigVideoPlayer from '../big-video-player/big-video-player.jsx';
import withBigVideoPlayer from '../../hocs/with-big-video-player/with-big-video-player.js';
import SignIn from '../sign-in/sign-in.jsx';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import AddReview from '../add-review/add-review.jsx';
import withAddReview from '../../hocs/with-add-review/with-add-review';
import PrivateRoute from "../private-route/private-route.jsx";
import history from "../../history.js";
import {AppRoute} from "../../consts.js";
import MyList from '../my-list/my-list.jsx';

const MoviePageWrapped = withMoviePage(MoviePage);
const BigPlayerWrapped = withBigVideoPlayer(BigVideoPlayer);
const AddReviewWrapper = withAddReview(AddReview);

class App extends PureComponent {
  render() {
    const {onReviewFormSubmit} = this.props;
    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main/>
          </Route>

          <Route exact path={AppRoute.SIGN_IN}>
            <SignIn/>
          </Route>

          <Route exact path={`${AppRoute.FILM}/:id`}

            render={(routeProps) => {
              return (
                <MoviePageWrapped {...routeProps}/>
              );
            }}
          >
          </Route>

          <Route exact path={`${AppRoute.PLAYER}/:id`}
            render={(routeProps) => {
              return (
                <BigPlayerWrapped {...routeProps}/>
              );
            }}
          >
          </Route>

          <PrivateRoute exact path={AppRoute.MY_LIST}
            render={() => {
              return (
                <MyList/>
              );
            }}
          />

          <PrivateRoute exact path={AppRoute.ADD_REVIEW}
            render={(routeProps) => {
              return (
                <AddReviewWrapper
                  {...routeProps}
                  onSubmit={onReviewFormSubmit}
                >
                </AddReviewWrapper>
              );
            }}
          />

        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  onReviewFormSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewFormSubmit(reviewData) {
    dispatch(DataOperation.addReview(reviewData));
  },
});

export {App};
export default connect(null, mapDispatchToProps)(App);
