import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Tabs from './tabs';
import {noop} from '../../utils/helpers';

describe(`Tabs component for MoviePage render correctly:`, () => {
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
          onTabClick={noop}
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
            onTabClick={noop}
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
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe(`Tabs component for Main render correctly:`, () => {
  const mockClassNames = {
    list: `catalog__genres-list`,
    item: `catalog__genres-item`,
    activeItem: `catalog__genres-item--active`,
    link: `catalog__genres-link`
  };

  it(`with "All genres" tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={[`All genres`, `Comedy`, `Drama`]}
            className={mockClassNames}
            activeTab={`All genres`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with "Comedy" tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={[`All genres`, `Comedy`, `Drama`]}
            className={mockClassNames}
            activeTab={`Comedy`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with "Drama" tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={[`All genres`, `Comedy`, `Drama`]}
            className={mockClassNames}
            activeTab={`Drama`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
