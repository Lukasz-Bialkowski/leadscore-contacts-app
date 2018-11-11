import React, { Fragment } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const FakeAvatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #ffff309c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: black;
  font-weight: 700;
  box-shadow: 0px 5px 20px 3px rgba(0, 0, 0, 0.8);
`;
const CompanyContactWrapper = styled.div.attrs({
  className: 'contact-wrapper'
})`
  height: 270px;
  width: 600px;
  overflow: auto;
  text-overflow: ellipsis;
  background-color: #111;
  box-shadow: 0px 5px 20px 3px rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 30px;
`;
const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 210px;
  width: 140px;
`;
const Avatar = styled.img.attrs({
  className: 'avatar-image',
  src: props => props.src
})`
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.9);
  height: 80px;
`;
const FlexContainer = styled.div.attrs({ className: 'flex-container' })`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const GridContainer = styled.div.attrs({ className: 'grid-wrapper' })`
  display: grid;
  grid-template-columns: 160px 230px;
`;

const CompanyContact = props => {
  const { companyName, emails, phoneNumbers, profilePicture } = props;

  const firstNumberData = Array.isArray(phoneNumbers) ? phoneNumbers[0] : null;
  const firstEmailData = Array.isArray(emails) ? emails[0] : null;

  const number = firstNumberData ? firstNumberData.number : null;
  const email = firstEmailData ? firstEmailData.email : null;

  return (
    <CompanyContactWrapper>
      <FlexContainer>
        <AvatarWrapper>
          {profilePicture ? (
            <Avatar src={profilePicture} />
          ) : (
            <FakeAvatar>
              {companyName ? (
                <span>{companyName.charAt(0)}</span>
              ) : (
                <span>A</span>
              )}
            </FakeAvatar>
          )}
        </AvatarWrapper>
        <GridContainer>
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
        </GridContainer>
      </FlexContainer>
    </CompanyContactWrapper>
  );
};

export default CompanyContact;
