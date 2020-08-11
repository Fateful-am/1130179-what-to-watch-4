import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withMoviePage from "./with-movie-page";

configure({
  adapter: new Adapter(),
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const MockComponent: React.FunctionComponent<Props> = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withMoviePage(MockComponent);

it(`_handleTabClick and _handleSetDefaultTab test`, () => {
  const wrapper = mount(
      <MockComponentWrapped
      />
  );
  const instance = wrapper.instance();
  expect(wrapper.state(`activeTab`)).toEqual(`Overview`);
  instance._handleTabClick(`NewPage`);
  expect(wrapper.state(`activeTab`)).toEqual(`NewPage`);
  instance._handleSetDefaultTab();
  expect(wrapper.state(`activeTab`)).toEqual(`Overview`);
});

