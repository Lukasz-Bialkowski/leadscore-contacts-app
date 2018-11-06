import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Routes from './_routes';

const App = () => <div><Routes /></div>;

export default compose(withRouter)(App);
