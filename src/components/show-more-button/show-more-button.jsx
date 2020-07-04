import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = ({onButtonClick}) =>{
  const handleClick = (evt) => {
    evt.preventDefault();
    onButtonClick();
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
  onButtonClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
