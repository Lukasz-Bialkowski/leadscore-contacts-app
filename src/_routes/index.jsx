import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../MainPage';
import LoginPage from '../LoginPage';
import ContactListPage from '../ContactListPage';
import NotFoundPage from '../NotFoundPage';

export default () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/contacts" component={ContactListPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
