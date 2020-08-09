import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedMain, {Main} from './main';
import {MOVIES, TEST_DATA} from '../../utils/test-data';
import {ALL_GENRES} from '../../consts';
import {extend} from '../../utils/helpers';
import NameSpace from '../../reducer/name-space';
import {Router} from 'react-router-dom';
import history from '../../history';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const testObject = {
  allGenres: [ALL_GENRES, `Comedy`, `Drama`]
};

describe(`Interactive with Main component: `, () => {
  const handleGenreTabClick = jest.fn();
  const handleShowMoreButtonClick = jest.fn();

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });
    wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              promoMovie={TEST_DATA.promoMovie}
              allGenres={testObject.allGenres}
              activeGenre={ALL_GENRES}
              needShowMoreButton={true}
              onGenreTabClick={handleGenreTabClick}
              onShowMoreButtonClick={handleShowMoreButtonClick}
              mainPageMovieCardCount={8}
              mainPageMovies={MOVIES}
            />
          </Router>
        </Provider>);
  });

  it(`should "Show more" button be pressed`, () => {
    const formSendPrevention = jest.fn();
    const showMoreButton = wrapper.find(`.catalog__button`);

    showMoreButton.simulate(`click`, {
      preventDefault: formSendPrevention,
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleShowMoreButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`should all genre menu items be pressed`, () => {
    const formSendPrevention = jest.fn();
    const genreLinks = wrapper.find(`.catalog__genres-link`);

    genreLinks.forEach((genreLink) => {
      genreLink.simulate(`click`, {
        preventDefault: formSendPrevention,
      });
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(genreLinks.length);
    expect(handleGenreTabClick).toHaveBeenCalledTimes(genreLinks.length);
  });

});

describe(`Main component with Redux:`, () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      [NameSpace.MOVIE]: TEST_DATA.initialStoreMovieState,
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });
    wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <ConnectedMain/>
          </Router>
        </Provider>
    );
  });

  it(`render the connected component`, () => {
    expect(wrapper.find(ConnectedMain).length).toEqual(1);
  });

  it(`check Prop matches with initialState`, () => {
    const main = wrapper.find(Main);

    expect(main.prop(`allGenres`)).toEqual(testObject.allGenres);
    expect(main.prop(`activeGenre`)).toEqual(ALL_GENRES);
    expect(main.prop(`needShowMoreButton`)).toEqual(true);
  });

});

describe(`Main component with Redux with "Comedy" tab active:`, () => {
  let store;
  let wrapper;
  const mainPageGenre = `Comedy`;

  beforeEach(() => {
    store = mockStore({
      [NameSpace.MOVIE]: extend(TEST_DATA.initialStoreMovieState, {
        mainPageGenre,
      }),
      [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
      [NameSpace.USER]: TEST_DATA.initialStoreUserState,
    });

    wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <ConnectedMain/>
          </Router>
        </Provider>
    );
  });

  it(`check Prop matches with "Comedy"`, () => {
    const main = wrapper.find(Main);

    expect(main.prop(`allGenres`)).toEqual(testObject.allGenres);
    expect(main.prop(`activeGenre`)).toEqual(mainPageGenre);
    expect(main.prop(`needShowMoreButton`)).toEqual(false);
  });

});
