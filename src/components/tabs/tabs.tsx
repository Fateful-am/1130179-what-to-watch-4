import * as React from 'react';

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

export default Tabs;
