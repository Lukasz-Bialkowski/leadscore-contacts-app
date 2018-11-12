import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Avatar from './Avatar';
import PersonContactData from './PersonContactData';

const ContactWrapper = styled.div.attrs({ className: 'contact-wrapper' })`
  height: 270px;
  width: 600px;
  overflow: auto;
  text-overflow: ellipsis;
  background-color: #111;
  box-shadow: 0px 5px 20px 3px rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 30px;
`;

const FlexContainer = styled.div.attrs({ className: 'flex-container' })`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PersonContact = (props) => {
  const {
    displayName,
    emails,
    phoneNumbers,
    profilePicture,
    title,
    birthday,
  } = props;

  const firstNumberData = Array.isArray(phoneNumbers) ? phoneNumbers[0] : null;
  const firstEmailData = Array.isArray(emails) ? emails[0] : null;

  const number = firstNumberData ? firstNumberData.number : null;
  const email = firstEmailData ? firstEmailData.email : null;

  return (
    <ContactWrapper>
      <FlexContainer>
        <Avatar displayName={displayName} profilePicture={profilePicture} />
        <PersonContactData
          displayName={displayName}
          number={number}
          email={email}
          title={title}
          birthday={birthday}
        />
      </FlexContainer>
    </ContactWrapper>
  );
};

export default PersonContact;
