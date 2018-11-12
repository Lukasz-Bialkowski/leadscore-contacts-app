import React, { Fragment } from 'react';
import styled from 'styled-components';

const ContactDataWrapper = styled.div.attrs({ className: 'grid-wrapper' })`
  display: grid;
  grid-template-columns: 160px 230px;
`;

const CompanyContactData = ({ companyName, email, number }) => (
  <ContactDataWrapper>
    {companyName && (
      <Fragment>
        <h3>Company Name:</h3>
        <h3>{companyName}</h3>
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
  </ContactDataWrapper>
);

export default CompanyContactData;
