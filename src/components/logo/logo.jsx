import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';
import {pushHistory} from '../../utils/helpers';

const Logo = (props) => {
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

Logo.propTypes = {
  inFooter: PropTypes.bool.isRequired,
};

export default Logo;
