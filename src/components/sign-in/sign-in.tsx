import * as React from 'react';
import Logo from '../logo/logo';
import {getAuthorizationStatus, getLoginErrorMessage} from '../../reducer/user/selectors';
import {AuthorizationStatus, Operation as UserOperation} from '../../reducer/user/user';
import {connect} from 'react-redux';
import {AppRoute} from '../../consts';
import {Redirect} from 'react-router-dom';

interface Props {
  authorizationStatus: string;
  loginErrorMessage: string;
  onSubmit: (submitInfo: {email: string; password: string}) => void;
}

class SignIn extends React.PureComponent<Props, {}> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  _renderErrorMessage(message) {
    return (
      <div className="sign-in__message">
        <p>{message}</p>
      </div>
    );
  }

  render() {
    const {authorizationStatus, loginErrorMessage} = this.props;
    return (
      authorizationStatus === AuthorizationStatus.AUTH
        ? <Redirect to={AppRoute.MAIN} />
        : <div className="user-page">
          <header className="page-header user-page__head">
            <Logo inFooter={false}/>

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <form
              action="#"
              className="sign-in__form"
              onSubmit={this.handleSubmit}
            >
              {loginErrorMessage && this._renderErrorMessage(loginErrorMessage)}
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                    id="user-email"
                    ref={this.loginRef}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                    id="user-password"
                    ref={this.passwordRef}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          </div>

          <footer className="page-footer">
            <Logo inFooter={true}/>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
    loginErrorMessage: getLoginErrorMessage(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
