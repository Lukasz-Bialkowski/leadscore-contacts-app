import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const withAuthProtection = (WrappedComponent) => {
  const mapStateToProps = state => ({
    isAuthenticated: state.authData.isAuthenticated,
  });

  const WithAuthProtection = ({ isAuthenticated, ...props }) => (isAuthenticated ? (
    <WrappedComponent {...props} />
  ) : (
    <Redirect to="/unauthorized" />
  ));

  WithAuthProtection.displayName = `withAuthProtection(${
    WrappedComponent.displayName
  })`;
  return connect(mapStateToProps)(WithAuthProtection);
};

export default withAuthProtection;
