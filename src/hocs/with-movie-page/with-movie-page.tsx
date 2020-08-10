import * as React from 'react';
import {MoviePageTabNames} from '../../consts';

interface Props {
  nothing?: null;
}

interface State {
  activeTab: string;
}

const withMoviePage = (Component) => {
  class WithMoviePage extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this._handleTabClick = this._handleTabClick.bind(this);
      this._handleSetDefaultTab = this._handleSetDefaultTab.bind(this);

      this.state = {
        activeTab: MoviePageTabNames.OVERVIEW,
      };
    }

    _handleTabClick(tab) {
      this.setState({
        activeTab: tab,
      });
    }

    _handleSetDefaultTab() {
      if (this.state.activeTab !== MoviePageTabNames.OVERVIEW) {
        this.setState({
          activeTab: MoviePageTabNames.OVERVIEW,
        });
      }
    }

    render() {
      const {activeTab} = this.state;
      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
          setDefaultTab={this._handleSetDefaultTab}
        />
      );
    }
  }

  return WithMoviePage;
};

export default withMoviePage;
