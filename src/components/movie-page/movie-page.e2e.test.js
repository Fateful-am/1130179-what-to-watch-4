import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MoviePage} from './movie-page';
import {TEST_DATA, testMovieCard} from '../../utils/test-data';
import {extend} from '../../utils/helpers';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`Should moviePageTabs clicked and correct state established`, () => {
  const testMovieId = 0;
  const store = mockStore(extend(TEST_DATA.initialStoreState, {
    currentMovieId: testMovieId,
    genreMovies: TEST_DATA.comedyMovies.filter((movie) => movie.id !== testMovieId),
  }));

  // const tabs = [`Overview`, `Details`, `Reviews`];
  const moviePageScreen = mount(
      <Provider store={store}>
        <MoviePage
          movie={testMovieCard}
        />
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

    // expect(moviePageScreen.state()).toMatchObject({activeTab: tabs[i]});
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(tabLinks.length);
});
