import * as React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import withMoviePage from '../../hocs/with-movie-page/with-movie-page';
import BigVideoPlayer from '../big-video-player/big-video-player';
import withBigVideoPlayer from '../../hocs/with-big-video-player/with-big-video-player';
import SignIn from '../sign-in/sign-in';
import {Operation as DataOperation} from '../../reducer/data/data';
import AddReview from '../add-review/add-review';
import withAddReview from '../../hocs/with-add-review/with-add-review';
import PrivateRoute from "../private-route/private-route";
import history from "../../history";
import {AppRoute} from "../../consts";
import MyList from '../my-list/my-list';

const MoviePageWrapped = withMoviePage(MoviePage);
const BigPlayerWrapped = withBigVideoPlayer(BigVideoPlayer);
const AddReviewWrapper = withAddReview(AddReview);

interface Props {
  onReviewFormSubmit: (reviewData: {movieId: number; rating: number; comment: string}) => void;
}

class App extends React.PureComponent<Props, {}> {
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

const mapDispatchToProps = (dispatch) => ({
  onReviewFormSubmit(reviewData) {
    dispatch(DataOperation.addReview(reviewData));
  },
});

export {App};
export default connect(null, mapDispatchToProps)(App);
