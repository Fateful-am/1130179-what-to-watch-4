import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';
import {HOST_NAME} from '../../consts';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import history from '../../history';

const UserStatus = (props) => {
  const {authorizationStatus, avatarUrl} = props;

  const renderAvatar = (src, onClick) => {
    return (
      <div
        className="user-block__avatar"
        onClick={onClick}
      >
        <img src={src} alt="User avatar" width="63" height="63"/>
      </div>
    );
  };

  const renderSignIn = () => {
    const handleLinkClick = (evt) => {
      evt.preventDefault();
      history.push(AppRoute.SIGN_IN);
    };

    return (
      <Link
        to={AppRoute.SIGN_IN}
        className="user-block__link"
        onClick={handleLinkClick}
      >
        Sign in
      </Link>
    );
  };

  const userLoginState = authorizationStatus === AuthorizationStatus.AUTH
    ? renderAvatar(`${HOST_NAME}${avatarUrl}`, ()=>{})
    : renderSignIn();

  return (
    <div className="user-block">
      {userLoginState}
    </div>
  );
};

UserStatus.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    avatarUrl: getUserData(state).avatarUrl,
  });
};

export {UserStatus};
export default connect(mapStateToProps)(UserStatus);
