import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { logout } from '../_actions/authActions';
import NavBar from './NavBar';
import Footer from './Footer';

const LayoutWrapper = styled.div.attrs({ className: 'layout-wrapper' })`
  height: 100vh;
  display: grid;
  grid-template-rows: 130px auto 130px;
`;

const Layout = (props) => {
  const { children, ...navbarProps } = props;

  return (
    <LayoutWrapper>
      <NavBar {...navbarProps} />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authData.isAuthenticated,
  authToken: state.authData.authToken,
});

const mapDispatchToProps = dispatch => ({
  logout: params => dispatch(logout(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
