import React, { Fragment } from "react";

import Contact from './Contact';

const renderContacts = contactsList =>
  contactsList.map(contact => <Contact {...contact} key={contact.id} />);

const ContactsList = ({ contactsList }) => {
  return <Fragment>{renderContacts(contactsList)}</Fragment>;
};

export default ContactsList;
