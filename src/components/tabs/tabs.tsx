import * as React from 'react';

interface Props {
  tabs: string[];
  className: {
    list: string;
    item: string;
    activeItem: string;
    link: string;
  };
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs: React.FunctionComponent<Props> = (props: Props) => {
  const {tabs, activeTab, className, onTabClick} = props;
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
