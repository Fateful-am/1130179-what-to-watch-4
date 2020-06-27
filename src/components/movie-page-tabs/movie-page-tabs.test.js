import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageTabs from './movie-page-tabs';

describe(`MoviePageTabs component render correctly`, () => {
  it(`with Overview tab`, () => {
    const tree = renderer
    .create(
        <MoviePageTabs
          tabs={[`Overview`, `Details`, `Reviews`]}
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
          <MoviePageTabs
            tabs={[`Overview`, `Details`, `Reviews`]}
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
          <MoviePageTabs
            tabs={[`Overview`, `Details`, `Reviews`]}
            activeTab={`Reviews`}
            onTabClick={()=>{}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
