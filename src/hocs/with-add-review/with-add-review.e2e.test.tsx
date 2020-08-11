import * as React from 'react';
import {configure, mount} from 'enzyme';
import withAddReview from './with-add-review';
import {MOVIES, TEST_DATA} from '../../utils/test-data';
import * as Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';

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

const MockComponentWrapped = withAddReview(MockComponent);

describe(`Check for withAddReview handlers: `, () => {

  const store = mockStore({
    [NameSpace.DATA]: TEST_DATA.initialStoreDataState,
  });

  let wrapper;
  const onSubmit = jest.fn();

  beforeEach(()=> {
    wrapper = mount(
        <Provider store={store}>
          <MockComponentWrapped
            movies={MOVIES}
            onSubmit={onSubmit}
            computedMatch={{params: {id: `8`}}}
          />
        </Provider>
    );
  });

  it(`check Star radioButton change event occurs`, () => {
    const test = jest.fn();
    wrapper.find(`#star-1`).simulate(`change`, {
      test,
    });
    expect(test).toHaveBeenCalledTimes(1);
  });

  it(`check comment input event occurs`, () => {
    const formSendPrevention = jest.fn();
    wrapper.find(`.add-review__textarea`).simulate(`input`, {
      preventDefault: formSendPrevention,
    });
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`when review length less 50 and star not checked`, () => {
    const formSendPrevention = jest.fn();
    wrapper.find(`.add-review__form`).simulate(`submit`, {
      preventDefault: formSendPrevention,
    });
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
