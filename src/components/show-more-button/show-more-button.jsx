import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = ({onClick}) =>{
  const handleClick = (evt) => {
    evt.preventDefault();
    onClick();
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleClick}
      >Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
