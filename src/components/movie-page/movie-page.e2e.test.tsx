import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MoviePage} from './movie-page';
import {MOVIES, TEST_DATA} from '../../utils/test-data';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../reducer/user/user';
import {Router} from 'react-router-dom';
import history from '../../history';
import {noop} from '../../utils/helpers';

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`Should all moviePageTabs clicked`, () => {
  const store = mockStore({
    [NameSpace.MOVIE]: TEST_DATA.initialStoreDataState,
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });

  const handleTabClick = jest.fn();
  const moviePageScreen = mount(
      <Provider store={store}>
        <Router history={history}>
          <MoviePage
            authorizationStatus={AuthorizationStatus.AUTH}
            movies={MOVIES}
            activeTab={`Overview`}
            onMovieLoad={noop}
            onLoadReviews={noop}
            onTabClick={handleTabClick}
            likeThisMovies={MOVIES.slice(0, 4)}
            match={{params: {id: `8`}}}
          />
        </Router>
      </Provider>
  );

  const tabLinks = moviePageScreen.find(`.movie-nav__link`);
  const formSendPrevention = jest.fn();

  tabLinks.forEach((tabLink) => {
    tabLink.simulate(`click`, {
      preventDefault: formSendPrevention,
      target: {
        outerText: tabLink.props().children,
        tagName: tabLink.type().toUpperCase()
      }
    });
  });

  expect(handleTabClick).toHaveBeenCalledTimes(tabLinks.length);
  expect(formSendPrevention).toHaveBeenCalledTimes(tabLinks.length);
});
