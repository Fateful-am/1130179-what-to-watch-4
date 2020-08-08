import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';
import {HOST_NAME} from '../../consts';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import history from '../../history';
import {pushHistory} from '../../utils/helpers';

const UserStatus = (props) => {
  const {authorizationStatus, avatarUrl} = props;

  const renderAvatar = () => {
    const handleAvatarClick = (evt) => {
      evt.preventDefault();
      pushHistory(AppRoute.MY_LIST);
    };

    return (
      <div
        className="user-block__avatar"
        onClick={handleAvatarClick}
      >
        {avatarUrl && <Link to={AppRoute.MY_LIST}><img src={`${HOST_NAME}${avatarUrl}`} alt="User avatar" width="63" height="63"/></Link>}
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
    ? renderAvatar()
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
