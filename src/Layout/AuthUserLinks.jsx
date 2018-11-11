import React from 'react';
import { Link } from "react-router-dom";

const AuthUserLinks = ({ logout, authToken }) => (
  <ul className="nav navbar-nav navbar-right">
    <li>
      <Link to="/contacts">Contacts</Link>
    </li>
    <li>
      <a href="#" onClick={() => logout({ authToken })}>
        Logout
      </a>
    </li>
  </ul>
);

export default AuthUserLinks;
