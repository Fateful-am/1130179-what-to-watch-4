import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all Tabs clicked`, () => {
  const mockClassNames = {
    list: `movie-nav__list`,
    item: `movie-nav__item`,
    activeItem: `movie-nav__item--active`,
    link: `movie-nav__link`
  };

  const tabClick = jest.fn();

  const moviePageTabsScreen = mount(
      <Tabs
        tabs={[`Overview`, `Details`, `Reviews`]}
        className={mockClassNames}
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
