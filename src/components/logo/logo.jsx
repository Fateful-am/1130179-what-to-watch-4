import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentPage} from '../../reducer/movie/selectors';
import {ActionCreator} from '../../reducer/movie/movie';
import {AppRoute, PageKind} from '../../consts';
import {Link} from 'react-router-dom';

const Logo = (props) => {
  const {inFooter, currentPage, onLogoClick} = props;

  const handleLogoClick = (evt) => {
    evt.preventDefault();
    onLogoClick();
  };

  const renderLetters = () => {
    return (
      <>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </>
    );
  };

  const linkClass = inFooter ? `logo__link logo__link--light` : `logo__link`;
  const link = currentPage === PageKind.MAIN
    ? <a className={linkClass}>
      {renderLetters()}
    </a>
    : <Link
      className={linkClass}
      to={AppRoute.MAIN}
      onClick={handleLogoClick}
    >
      {renderLetters()}
    </Link>;

  return (
    <div className="logo">
      {link}
    </div>
  );
};

Logo.propTypes = {
  inFooter: PropTypes.bool.isRequired,
  currentPage: PropTypes.string.isRequired,
  onLogoClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    currentPage: getCurrentPage(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onLogoClick() {
    dispatch(ActionCreator.gotoMain());
  },
});

export {Logo};
export default connect(mapStateToProps, mapDispatchToProps)(Logo);
