import React from 'react';
import Placeholder from './Placeholder';

const TITLE = 'Contacts list error';
const SUBTITLE = 'There was an error fetching contacts';
const IMG_ALT = 'Contacts list error image';
const IMG_SRC = '';
const CUSTOM_CLASS_NAME = 'contacts-list-error';

const ContactsListError = () => (
  <Placeholder
    title={TITLE}
    subtitle={SUBTITLE} 
    imgSrc={IMG_SRC}
    imgAlt={IMG_ALT}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

export default ContactsListError;
