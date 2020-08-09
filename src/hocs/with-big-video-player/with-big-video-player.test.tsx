import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withBigVideoPlayer from './with-big-video-player';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {TEST_DATA} from '../../utils/test-data';
import {Provider} from 'react-redux';
import {noop} from '../../utils/helpers';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const MockComponent: React.FunctionComponent<Props> = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const store = mockStore({
  [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
});

const MockComponentWrapped = withBigVideoPlayer(MockComponent);

it(`withBigVideoPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        videoLink={``}
        previewImage={``}
        title={``}
        onExitButtonClick={noop}
        match={{params: {id: `8`}}}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

