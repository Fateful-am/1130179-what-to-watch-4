import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MoviePage} from './movie-page';
import {TEST_DATA, testMovieCard} from '../../utils/test-data';
import {extend} from '../../utils/helpers';
import NameSpace from '../../reducer/name-space';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`Should all moviePageTabs clicked`, () => {
  const testMovieId = 0;
  const store = mockStore({
    [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
      currentMovieId: testMovieId,
    }),
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
    [NameSpace.USER]: TEST_DATA.initialStoreUserState,
  });

  const handleTabClick = jest.fn();
  const moviePageScreen = mount(
      <Provider store={store}>
        <MoviePage
          activeTab={`Overview`}
          movie={testMovieCard}
          onTabClick={handleTabClick}
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
  });

  expect(handleTabClick).toHaveBeenCalledTimes(tabLinks.length);
  expect(formSendPrevention).toHaveBeenCalledTimes(tabLinks.length);
});
