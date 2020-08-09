import * as React from 'react';

interface Props {
  onClick: () => void,
}

const ShowMoreButton: React.FunctionComponent<Props> = (props: Props) =>{
  const {onClick} = props
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
