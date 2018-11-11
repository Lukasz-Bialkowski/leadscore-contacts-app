import React from 'react';
import { Route } from 'react-router-dom';
import withAuthProtection from './withAuthProtection';

const PrivateRoute = ({ component, ...props }) => (
  <Route component={withAuthProtection(component)} {...props} />
);

export default PrivateRoute;
