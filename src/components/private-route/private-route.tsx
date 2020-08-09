import * as React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../consts';
import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

type Props = RouteProps & {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  render: () => React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {render, path, exact, authorizationStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(props)
            : <Redirect to={AppRoute.SIGN_IN}/>
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
