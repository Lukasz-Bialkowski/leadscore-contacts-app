import React from 'react';
import styled from 'styled-components';

const LOGIN_BUTTON = 'Login';
const SIGN_UP_BUTTON = 'Sign up';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupButton = styled.a.attrs({
  className: 'sign-up-button',
  href: props => props.href,
})`
  display: inline-block;
  font-size: 16px;
  width: 120px;
  background-color: #00000036;
  color: black;
  padding: 8px 20px;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
`;

const LoginButton = styled.button.attrs({
  type: props => props.type,
  disabled: props => (props.disabled ? props.disabled : null),
})`
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  background-color: ${props => (props.disabled ? '#a5a3259e' : '#ccc92de0')};
  color: black;
  padding: 8px 20px;
  width: 120px;
  border: 0px;
  border-radius: 8px;
  &:hover {
    cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};
  }
`;

const LoginFormButtons = ({
  login,
  password,
  isFetching,
  handleFormSubmit,
}) => (
  <ButtonsWrapper>
    <LoginButton
      disabled={!login || !password || isFetching}
      onClick={handleFormSubmit}
    >
      {LOGIN_BUTTON}
    </LoginButton>
    <SignupButton href="https://app-staging.leadscore.io/#/signup">
      {SIGN_UP_BUTTON}
    </SignupButton>
  </ButtonsWrapper>
);

export default LoginFormButtons;
