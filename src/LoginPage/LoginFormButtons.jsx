import React from 'react';
import styled from 'styled-components';

import {
  SIGN_UP_BUTTON_COLOR,
  LOGIN_BUTTON_ENABLED,
  LOGIN_BUTTON_DISABLED,
  LOGIN_BUTTON_FONT_COLOR,
  SIGNUP_BUTTON_FONT_COLOR,
} from '../_common/colors';

const LOGIN_BUTTON = 'Login';
const SIGN_UP_BUTTON = 'Sign up';

const ButtonsWrapper = styled.div.attrs({ className: 'buttons-wrapper' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
`;

const SignupButton = styled.a.attrs({
  className: 'sign-up-button',
  href: props => props.href,
})`
  display: inline-block;
  font-size: 16px;
  width: 120px;
  background-color: ${SIGN_UP_BUTTON_COLOR};
  color: ${SIGNUP_BUTTON_FONT_COLOR};
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
  background-color: ${props => (props.disabled ? LOGIN_BUTTON_DISABLED : LOGIN_BUTTON_ENABLED)};
  color: ${LOGIN_BUTTON_FONT_COLOR};
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
