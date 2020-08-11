import * as React from 'react';
import {configure, mount, shallow} from 'enzyme';
import {TEST_DATA} from '../../utils/test-data';
import * as Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import withBigVideoPlayer from './with-big-video-player';
import history from '../../history';

const mockStore = configureStore([]);

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

const MockComponentWrapped = withBigVideoPlayer(MockComponent);

const store = mockStore({
  [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
});


it(`_handlePlayButtonClick test`, () => {
  const wrapper = mount(shallow(
      <Provider store={store}>
        <MockComponentWrapped
          match={{params: {id: `8`}}}
        />
      </Provider>).get(0));
  expect(wrapper.find(`WithBigAudioPlayer`).state(`isPlaying`)).toEqual(true);
  wrapper.find(`WithBigAudioPlayer`).instance()._handlePlayButtonClick();
  expect(wrapper.find(`WithBigAudioPlayer`).state(`isPlaying`)).toEqual(false);
});

it(`_handleExitButtonClick test with incorrect movieId`, () => {
  const wrapper = mount(shallow(
      <Provider store={store}>
        <MockComponentWrapped
          match={{params: {id: `-1`}}}
        />
      </Provider>).get(0));
  expect(history.location.pathname).toEqual(`/`);
  wrapper.find(`WithBigAudioPlayer`).instance()._handleExitButtonClick();
  expect(history.location.pathname).toEqual(`/`);
});

it(`_handleExitButtonClick test with correct movieId`, () => {
  const wrapper = mount(shallow(
      <Provider store={store}>
        <MockComponentWrapped
          match={{params: {id: `8`}}}
        />
      </Provider>).get(0));
  expect(history.location.pathname).toEqual(`/`);
  wrapper.find(`WithBigAudioPlayer`).instance()._handleExitButtonClick();
  expect(history.location.pathname).toEqual(`/films/8`);
});
