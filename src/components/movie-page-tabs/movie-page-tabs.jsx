import React from 'react';
import PropTypes from 'prop-types';

const MoviePageTabs = ({tabs, activeTab, onTabClick}) => {
  const handleTabClick = (evt) =>{
    evt.preventDefault();
    onTabClick();
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list"
        onClick={handleTabClick}
      >
        {tabs.map((tab, i) => {
          return (
            <li
              key={`tab-${tab}-${i}`}
              className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
            >
              <a href="#" className="movie-nav__link">{tab}</a>
            </li>
          );
        })}
      </ul>
    </nav>

  );
};

MoviePageTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default MoviePageTabs;
