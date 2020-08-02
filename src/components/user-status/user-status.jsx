import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user';
import {HOST_NAME} from '../../consts';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import {ActionCreator} from '../../reducer/movie/movie';

const UserStatus = (props) => {
  const {authorizationStatus, avatarUrl, onSignInClick} = props;

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

  const renderSignIn = (onClick) => {
    const handleLinkClick = (evt) => {
      evt.preventDefault();
      onClick();
    };

    return (
      <a
        href="#"
        className="user-block__link"
        onClick={handleLinkClick}
      >
        Sign in
      </a>
    );
  };

  const userLoginState = authorizationStatus === AuthorizationStatus.AUTH
    ? renderAvatar(`${HOST_NAME}${avatarUrl}`, ()=>{})
    : renderSignIn(onSignInClick);

  return (
    <div className="user-block">
      {userLoginState}
    </div>
  );
};

UserStatus.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  onSignInClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    avatarUrl: getUserData(state).avatarUrl,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(ActionCreator.signIn());
  },

});

export {UserStatus};
export default connect(mapStateToProps, mapDispatchToProps)(UserStatus);