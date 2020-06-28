import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

describe(`Tabs component render correctly`, () => {
  const mockClassNames = {
    list: `movie-nav__list`,
    item: `movie-nav__item`,
    activeItem: `movie-nav__item--active`,
    link: `movie-nav__link`
  };

  it(`with Overview tab`, () => {
    const tree = renderer
    .create(
        <Tabs
          tabs={[`Overview`, `Details`, `Reviews`]}
          className={mockClassNames}
          activeTab={`Overview`}
          onTabClick={()=>{}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with Details tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={[`Overview`, `Details`, `Reviews`]}
            className={mockClassNames}
            activeTab={`Details`}
            onTabClick={()=>{}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with Reviews tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={[`Overview`, `Details`, `Reviews`]}
            className={mockClassNames}
            activeTab={`Reviews`}
            onTabClick={()=>{}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
