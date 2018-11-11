import React from 'react';
import { Link } from "react-router-dom";

import QuestLinks from './QuestLinks';
import AuthUserLinks from './AuthUserLinks';

const NavBar = ({ isAuthenticated, logout, authToken }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Main
        </Link>
      </div>
      <div className="collapse navbar-collapse">
        {isAuthenticated ? <AuthUserLinks logout={logout} authToken={authToken}/> : <QuestLinks />}
      </div>
    </div>
  </nav>
);

export default NavBar;