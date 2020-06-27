import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviePageTabs from './movie-page-tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should moviePageTabs clicked`, () => {
  const tabClick = jest.fn();

  const moviePageTabsScreen = mount(
      <MoviePageTabs
        tabs={[`Overview`, `Details`, `Reviews`]}
        activeTab={`Overview`}
        onTabClick={tabClick}
      />
  );

  const tabLinks = moviePageTabsScreen.find(`.movie-nav__link`);
  const formSendPrevention = jest.fn();

  tabLinks.forEach((tabLink) => {
    tabLink.simulate(`click`, {
      preventDefault: formSendPrevention
    });
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(3);
  expect(tabClick).toHaveBeenCalledTimes(3);

});
