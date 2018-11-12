import React, { Fragment } from 'react';
import styled from 'styled-components';

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
  @media (min-width: 800px) {
    font-size: 16px;
    width: 220px;
    height: 25px;
  }
`;

const LoginSection = ({ login, submitted, handleFormChange }) => (
  <Fragment>
    <div style={{ justifySelf: 'right' }}>
      <label>Login</label>
    </div>
    <Input
      placeholder="Enter your login"
      type="text"
      id="login-input"
      name="login"
      value={login}
      onChange={handleFormChange}
    />
    <div />
    {submitted && !login ? 'Login is required' : <div />}
  </Fragment>
);

export default LoginSection;
