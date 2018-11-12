import React, { Fragment } from 'react';
import styled from 'styled-components';

const PersonContactDataWrapper = styled.div.attrs({
  className: 'grid-wrapper',
})`
  display: grid;
  grid-template-columns: 160px 230px;
`;

const PersonContactData = ({ displayName, number, email, title, birthday }) => (
  <PersonContactDataWrapper>
    {displayName && (
      <Fragment>
        <h3>Full Name:</h3>
        <h3>{displayName}</h3>
      </Fragment>
    )}
    {email && (
      <Fragment>
        <h3>Email: </h3>
        <h3>{email}</h3>
      </Fragment>
    )}
    {number && (
      <Fragment>
        <h3>Phone Number: </h3>
        <h3>{number}</h3>
      </Fragment>
    )}
    {title && (
      <Fragment>
        <h3>Job title: </h3>
        <h3>{title}</h3>
      </Fragment>
    )}
    {birthday && (
      <Fragment>
        <h3>Birthday: </h3>
        <h3>{birthday}</h3>
      </Fragment>
    )}
  </PersonContactDataWrapper>
);

export default PersonContactData;
