import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TeamSVG from '../images/team.svg';

const NavbarWrapper = styled.nav.attrs({ className: 'navbar' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0000002e;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`;
const AppLogo = styled.div.attrs({ className: 'app-logo' })`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavbarList = styled.ul.attrs({ className: 'navbar-list' })`
  display: flex;
  align-items: center;
`;
const NavbarItem = styled.li.attrs({ className: 'navbar-item' })`
  padding: 10px;
  padding-right: 20px;
`;

const StyledNav = styled(NavLink).attrs({ activeStyle: { color: '#a5a325' } })`
  &:hover { color: yellow;}
`;
const AppLogoHeader = styled.div`
@media (min-width: 800px) {
  display: inherit;
}
display: none;
&:hover { color: yellow;}
`;

const AppLogoImage = styled.div`
@media (min-width: 800px) {
  display: none;
}
display: inherit;
&:hover { color: yellow;}
`;
const AuthUserLinks = ({ logout, authToken }) => (
  <Fragment>
    <NavbarItem className="nav-item">
      <StyledNav to="/contacts" className="nav-link">Contacts</StyledNav>
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
      <StyledNav to="/login" className="nav-link">Login</StyledNav>
    </NavbarItem>
    <NavbarItem className="nav-item">
      <a href="https://app-staging.leadscore.io/#/signup" className="nav-link">Sign up</a>
    </NavbarItem>
  </Fragment>
);

const NavBar = ({ isAuthenticated, logout, authToken }) => (
  <NavbarWrapper>
    <AppLogo>
      <a href="/"><AppLogoImage><TeamSVG height="50px" fill="white" style={{ padding: '10px' }} /></AppLogoImage></a>
      <AppLogoHeader to="/">Leadscore-Contacts-App</AppLogoHeader>
    </AppLogo>
    <NavbarList>
      <NavbarItem>
        <StyledNav to="/main">Main</StyledNav>
      </NavbarItem>
      {isAuthenticated ? <AuthUserLinks logout={logout} authToken={authToken} /> : <QuestLinks />}
    </NavbarList>
  </NavbarWrapper>
);

export default NavBar;
