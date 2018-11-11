import React from 'react';
import Placeholder, { ERROR_SVG_NAME } from './Placeholder';

const TITLE = 'Contacts list error';
const SUBTITLE = 'There was an error fetching contacts';
const CUSTOM_CLASS_NAME = 'contacts-list-error';

const ContactsListError = () => (
  <Placeholder
    title={TITLE}
    subtitle={SUBTITLE}
    svgName={ERROR_SVG_NAME}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

export default ContactsListError;
