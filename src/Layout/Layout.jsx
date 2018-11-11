import React, { Fragment } from "react";
import { connect } from "react-redux";

import { logout } from "../_actions/authActions";
import NavBar from './NavBar';

const Layout = props => {
  const { children, ...navbarProps } = props;

  return (
    <Fragment>
      <NavBar {...navbarProps} />
      {children}
      <footer>Leadscore-contactss-app by @Lukasz Bialkowski</footer>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authData.isAuthenticated,
  authToken: state.authData.authToken
});

const mapDispatchToProps = dispatch => ({
  logout: params => dispatch(logout(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
