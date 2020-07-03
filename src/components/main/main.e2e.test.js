import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ConnectedMain, {Main} from './main';
import {TEST_DATA} from '../../utils/test-data';
import {ALL_GENRES} from '../../consts';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const testObject = {
  allGenres: [ALL_GENRES, `Comedy`, `Drama`]
};

describe(`Interactive with Main component: `, () => {
  const handleGenreTabClick = jest.fn();

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(TEST_DATA.initialStoreState);
    wrapper = mount(
        <Provider store={store}>
          <Main
            promoMovie={TEST_DATA.initialStoreState.promoMovie}
            allGenres={testObject.allGenres}
            activeGenre={ALL_GENRES}
            onGenreTabClick={handleGenreTabClick}
          />
        </Provider>);
  });

  // it(`should all movie cards be pressed`, () => {
  //   const formSendPrevention = jest.fn();
  //   const movieCards = wrapper.find(`.small-movie-card`);
  //
  //   movieCards.forEach((movieCard) => {
  //     movieCard.simulate(`click`, {
  //       preventDefault: formSendPrevention,
  //     });
  //   });
  //
  //   expect(formSendPrevention).toHaveBeenCalledTimes(movieCards.length);
  //   expect(handleMovieCardClick).toHaveBeenCalledTimes(movieCards.length);
  // });

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
    store = mockStore(TEST_DATA.initialStoreState);
    wrapper = mount(
        <Provider store={store}>
          <ConnectedMain/>
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
  });

});
