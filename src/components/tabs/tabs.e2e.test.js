import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should all Tabs clicked:`, () => {
  it(`for MoviePage component`, () => {
    const mockClassNames = {
      list: `movie-nav__list`,
      item: `movie-nav__item`,
      activeItem: `movie-nav__item--active`,
      link: `movie-nav__link`
    };

    const tabClick = jest.fn();

    const tabsScreen = mount(
        <Tabs
          tabs={[`Overview`, `Details`, `Reviews`]}
          className={mockClassNames}
          activeTab={`Overview`}
          onTabClick={tabClick}
        />
    );

    const tabLinks = tabsScreen.find(`.${mockClassNames.link}`);
    const formSendPrevention = jest.fn();

    tabLinks.forEach((tabLink) => {
      tabLink.simulate(`click`, {
        preventDefault: formSendPrevention
      });
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(3);
    expect(tabClick).toHaveBeenCalledTimes(3);
  });

  it(`for Main component`, () => {
    const mockClassNames = {
      list: `catalog__genres-list`,
      item: `catalog__genres-item`,
      activeItem: `catalog__genres-item--active`,
      link: `catalog__genres-link`
    };

    const tabClick = jest.fn();

    const tabsScreen = mount(
        <Tabs
          tabs={[`All genres`, `Comedy`, `Drama`]}
          className={mockClassNames}
          activeTab={`All genres`}
          onTabClick={tabClick}
        />
    );

    const tabLinks = tabsScreen.find(`.${mockClassNames.link}`);
    const formSendPrevention = jest.fn();

    tabLinks.forEach((tabLink) => {
      tabLink.simulate(`click`, {
        preventDefault: formSendPrevention
      });
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(3);
    expect(tabClick).toHaveBeenCalledTimes(3);
  });

});
