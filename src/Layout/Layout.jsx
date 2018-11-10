import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const Layout = ({ children, userAuthenticated }) => {
  return (
    <div>
      { !userAuthenticated && <Link to='/login'>Login!</Link> }
      <Link to='/contacts'>Contacts!</Link>
      {children}
      <p>Leadscore-contacts-app by @Lukasz Bialkowski</p>
    </div>
  )
};

const mapStateToProps = state => ({
  userAuthenticated: state.authData.data,
});

export default connect(mapStateToProps)(Layout);
