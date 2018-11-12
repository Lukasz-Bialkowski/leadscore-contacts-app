import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import AppLogo from './AppLogo';
import { NAVBAR_ACTIVE_LINK, ITEM_HOVER, NAVBAR_BACKGROUND_COLOR } from '../_common/colors';

const NavbarWrapper = styled.nav.attrs({ className: "navbar" })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${NAVBAR_BACKGROUND_COLOR};
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`;

const NavbarList = styled.ul.attrs({ className: "navbar-list" })`
  display: flex;
  align-items: center;
`;

const NavbarItem = styled.li.attrs({ className: "navbar-item" })`
  padding: 10px;
  padding-right: 20px;
`;

const StyledNav = styled(NavLink).attrs({ activeStyle: { color: NAVBAR_ACTIVE_LINK } })`
  &:hover {
    color: ${ITEM_HOVER};
  }
`;

const AuthUserLinks = ({ logout, authToken }) => (
  <Fragment>
    <NavbarItem className="nav-item">
      <StyledNav to="/contacts" className="nav-link">
        Contacts
      </StyledNav>
    </NavbarItem>
    <NavbarItem className="nav-item">
      <a href="#" className="nav-link" onClick={() => logout({ authToken })}>
        Logout
      </a>
    </NavbarItem>
  </Fragment>
);

const QuestLinks = () => (
  <Fragment>
    <NavbarItem className="nav-item">
      <StyledNav to="/login" className="nav-link">
        Login
      </StyledNav>
    </NavbarItem>
    <NavbarItem className="nav-item">
      <a href="https://app-staging.leadscore.io/#/signup" className="nav-link">
        Sign up
      </a>
    </NavbarItem>
  </Fragment>
);

const NavBar = ({ isAuthenticated, logout, authToken }) => (
  <NavbarWrapper>
    <AppLogo />
    <NavbarList>
      <NavbarItem>
        <StyledNav to="/main">Main</StyledNav>
      </NavbarItem>
      {isAuthenticated ? (
        <AuthUserLinks logout={logout} authToken={authToken} />
      ) : (
        <QuestLinks />
      )}
    </NavbarList>
  </NavbarWrapper>
);

export default NavBar;
