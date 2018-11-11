import React from 'react';
import Placeholder from './Placeholder';

const TITLE = 'Contacts list empty';
const SUBTITLE = 'You don\'t have contacts yet. Go ahead and create one.';
const IMG_ALT = 'Contacts list empty image';
const IMG_SRC = '';
const CUSTOM_CLASS_NAME = 'contacts-list-empty';

const ContactsListEmpty = () => (
  <Placeholder
    title={TITLE}
    subtitle={SUBTITLE} 
    imgSrc={IMG_SRC}
    imgAlt={IMG_ALT}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

export default ContactsListEmpty;
