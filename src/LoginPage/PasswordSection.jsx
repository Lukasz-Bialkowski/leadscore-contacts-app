import React, { Fragment } from 'react';
import styled from 'styled-components';

import { MOBILE_MIN_RESOLUTION_BOUNDARY } from '../_common/constants';

const Input = styled.input.attrs({
  className: 'input',
  placeholder: props => props.placeholder,
})`
  padding: 8px 10px;
  border-radius: 6px;
  width: 580px;
  height: 30px;
  font-size: 20px;
  border: 0;
  @media (min-width: ${MOBILE_MIN_RESOLUTION_BOUNDARY}) {
    font-size: 16px;
    width: 220px;
    height: 25px;
  }
`;

const PasswordSection = ({ password, submitted, handleFormChange }) => (
  <Fragment> 

    <div style={{ justifySelf: 'right' }}>
      <label>Password</label>
    </div>
    <Input
      placeholder="Enter your password"
      type="password"
      id="password-input"
      name="password"
      value={password}
      onChange={handleFormChange}
    />
    <div />
    {submitted && !password ? 'Password is required' : <div />}
  </Fragment>
);

export default PasswordSection;
