import React from 'react';
import { Link } from "react-router-dom";

const QuestLinks = () => (
  <ul className="nav navbar-nav navbar-right">
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <a href="https://app-staging.leadscore.io/#/signup">Sign up</a>
    </li>
  </ul>
);

export default QuestLinks;
