import React from 'react';
import styled from 'styled-components';

import LoginSection from './LoginSection';
import PasswordSection from './PasswordSection';
import { MOBILE_MIN_RESOLUTION_BOUNDARY } from '../_common/constants';

const FormContainer = styled.form.attrs({ className: 'login-form' })`
  @media (min-width: ${MOBILE_MIN_RESOLUTION_BOUNDARY}) {
    display: grid;
    grid-template-columns: 120px 250px;
    grid-template-rows: 40px 20px 40px 20px;
    justify-content: center;
    grid-gap: 5px 10px;
    margin: 20px 0px;
    align-items: center;
    height: 100%;
  }
  display: grid;
  grid-gap: 10px 0px;
  margin: 30px;
  height: 260px;
`;

const Form = ({
  handleFormSubmit,
  handleFormChange,
  login,
  password,
  submitted,
}) => (
  <FormContainer onSubmit={handleFormSubmit}>
    <LoginSection
      login={login}
      submitted={submitted}
      handleFormChange={handleFormChange}
    />
    <PasswordSection
      password={password}
      submitted={submitted}
      handleFormChange={handleFormChange}
    />
  </FormContainer>
);

export default Form;
