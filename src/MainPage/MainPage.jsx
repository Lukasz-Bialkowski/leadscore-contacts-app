import React from 'react';
import { connect } from 'react-redux';

import Placeholder from '../_common/Placeholder';

const TITLE = 'Welcome in leadscore-contacts-app';
const AUTH_USER_SUBTITLE = "Click 'Contacts' option in navigation to see your contacts.";
const GUEST_SUBTITLE = 'Login to see your contacts.';
const CUSTOM_CLASS_NAME = 'main-leadscore-page';

const MainPage = ({ isAuthenticated }) => (
  <Placeholder
    title={TITLE}
    subtitle={isAuthenticated ? AUTH_USER_SUBTITLE : GUEST_SUBTITLE}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.authData.isAuthenticated,
});

export default connect(mapStateToProps)(MainPage);
