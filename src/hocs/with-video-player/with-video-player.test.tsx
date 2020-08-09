import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withVideoPlayer from './with-video-player';

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

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`withVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      previewImage={``}
      previewVideoLink={``}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
