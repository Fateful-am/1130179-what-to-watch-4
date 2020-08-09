import * as React from 'react';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';
import {pushHistory} from '../../utils/helpers';

interface Props {
  inFooter: boolean;
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
  const {inFooter} = props;
  const historyPushUrl = AppRoute.MAIN;

  const handleLogoClick = (evt) => {
    evt.preventDefault();
    pushHistory(historyPushUrl);
  };

  const linkClass = inFooter ? `logo__link logo__link--light` : `logo__link`;

  return (
    <div className="logo">
      <Link
        className={linkClass}
        to={historyPushUrl}
        onClick={handleLogoClick}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
