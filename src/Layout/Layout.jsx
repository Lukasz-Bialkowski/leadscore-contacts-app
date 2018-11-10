import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const Layout = ({ children, isAuthenticated }) => {
  return (
    <div>
      { !isAuthenticated ? <Link to='/login'>Login</Link> : <Link to='/logout'>Logout</Link> }
      <Link to='/contacts'>Contacts</Link>
      <Link to='/main'>Main</Link>
      {children}
      <p>Leadscore-contacts-app by @Lukasz Bialkowski</p>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.authData.isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
