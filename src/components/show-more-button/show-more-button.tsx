import * as React from 'react';

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

export default ShowMoreButton;
