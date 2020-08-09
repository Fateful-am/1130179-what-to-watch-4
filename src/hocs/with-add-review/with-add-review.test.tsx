import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withAddReview from './with-add-review';
import {TEST_DATA} from '../../utils/test-data';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {noop} from '../../utils/helpers';

const mockStore = configureStore([]);

Enzyme.configure({
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

const store = mockStore({
  [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
});

const MockComponentWrapped = withAddReview(MockComponent);

it(`withAddReview is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        movie={TEST_DATA.promoMovie}
        onSubmit={noop}
        computedMatch={{params: {id: `8`}}}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
