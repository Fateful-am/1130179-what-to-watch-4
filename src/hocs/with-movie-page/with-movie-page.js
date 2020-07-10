import React, {PureComponent} from "react";
import {MoviePageTabNames} from '../../consts';

const withMoviePage = (Component) => {
  class WithMoviePage extends PureComponent {
    constructor(props) {
      super(props);

      this._handleTabClick = this._handleTabClick.bind(this);
      this._setDefaultTab = this._setDefaultTab.bind(this);

      this.state = {
        activeTab: MoviePageTabNames.OVERVIEW,
      };
    }

    _handleTabClick(tab) {
      this.setState({
        activeTab: tab,
      });
    }

    _setDefaultTab() {
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
          setDefaultTab={this._setDefaultTab}
        />
      );
    }
  }

  WithMoviePage.propTypes = {
  };

  return WithMoviePage;
};

export default withMoviePage;
