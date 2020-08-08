import * as React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({tabs, activeTab, className, onTabClick}) => {
  const handleTabClick = (tab) => (evt) =>{
    evt.preventDefault();
    onTabClick(tab);
  };

  return (
    <ul className={className.list}
    >
      {tabs.map((tab, i) => {
        return (
          <li
            key={`tab-${tab}-${i}`}
            className={`${className.item}${tab === activeTab ? ` ${className.activeItem}` : ``}`}
            onClick={handleTabClick(tab)}
          >
            <a href="#" className={className.link}>{tab}</a>
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.shape({
    list: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    activeItem: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
