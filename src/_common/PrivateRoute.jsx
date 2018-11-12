import React from 'react';
import { Route } from 'react-router-dom';
import withAuthProtection from '../_common/withAuthProtection';

const PrivateRoute = ({component, ...props}) => {
  return <Route component={withAuthProtection(component)} {...props} />
}

export default PrivateRoute;
