import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import withDynamicImport from '../_common/withDynamicImport';

const MainPageLoadable = lazy(() => import('../MainPage'));
const LoginPageLoadable = lazy(() => import('../LoginPage'));
const ContactListPageLoadable = lazy(() => import('../ContactListPage'));
const NotFoundPageLoadable = lazy(() => import('../NotFoundPage'));

export default () => (
  <Switch>
    <Route exact path="/" render={()=><Redirect to='/main'/>} />
    <Route exact path="/main" component={withDynamicImport(MainPageLoadable)} />
    <Route exact path="/login" component={withDynamicImport(LoginPageLoadable)} />
    <Route exact path="/contacts" component={withDynamicImport(ContactListPageLoadable)} />
    <Route component={withDynamicImport(NotFoundPageLoadable)} />
  </Switch>
);
