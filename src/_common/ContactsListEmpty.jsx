import React from 'react';

import Placeholder, { EMPTY_SVG_NAME } from './Placeholder';

const TITLE = 'Contacts list empty';
const SUBTITLE = 'You don\'t have contacts yet. Go ahead and create one.';
const CUSTOM_CLASS_NAME = 'contacts-list-empty';

const ContactsListEmpty = () => (
  <Placeholder
    title={TITLE}
    subtitle={SUBTITLE}
    svgName={EMPTY_SVG_NAME}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

export default ContactsListEmpty;
