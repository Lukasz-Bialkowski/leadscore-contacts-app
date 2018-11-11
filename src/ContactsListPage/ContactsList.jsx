import React from 'react';
import styled from 'styled-components';

import PersonContact from './PersonContact';
import CompanyContact from './CompanyContact';

const ContactsListsWrapper = styled.div.attrs({
  className: 'contacts-list-wrapper',
})`
  margin: 40px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 600px);
  grid-gap: 30px 10px;
  justify-content: space-evenly;
`;

const renderContacts = (contactsList, filter) => {
  const mapFunction = filter === 'PERSON'
    ? contact => <PersonContact {...contact} key={contact.id} />
    : contact => <CompanyContact {...contact} key={contact.id} />;
  return contactsList.map(mapFunction);
};

const ContactsList = ({ contactsList, filter }) => (
  <ContactsListsWrapper>
    {renderContacts(contactsList, filter)}
  </ContactsListsWrapper>
);

export default ContactsList;
