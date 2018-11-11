import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { login } from '../_actions/authActions';
import FullPageSpinner from '../_common/FullPageSpinner';

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
  height: 25px;}
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
  &:hover {cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};}
`;
const SectionWrapper = styled.div.attrs({ className: 'section-wrapper' })`
  font-size: 34px;
  padding: 30px 35px;
  width: 260px;
  @media (min-width: 800px) {
    width: 380px;
    padding: 20px 43px;
  text-align: center;
  }
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
const VerticalBar = styled.div.attrs({ className: 'vertical-bar' })`
  @media (min-width: 800px) {
    border-left: 1px solid white;
    height: 60%;
  }
`;
const LoginPageWrapper = styled.div.attrs({ className: 'login-page-wrapper' })`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const FormWrapper = styled.div.attrs({ className: 'form-wrapper' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form.attrs({ className: 'login-form' })`
  @media (min-width: 800px) {
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
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      submitted: false,
    };
  }

  handleFormChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { login, password } = this.state;
    const { postLogin } = this.props;
    if (login && password) {
      postLogin({ login, password });
    }
  };

  render() {
    const { login, password, submitted } = this.state;
    const { isError, isFetching } = this.props;
    return (
      <LoginPageWrapper>
        <SectionWrapper>&gt; Login</SectionWrapper>
        <FullPageSpinner isFetching={isFetching} />
        <VerticalBar />
        <FormWrapper>
          { isError && <div style={{fontWeight: 700, textDecoration: 'underline' }}>Wrong credentials or network problem.</div>}
          <Form onSubmit={this.handleFormSubmit}>
            <div style={{ justifySelf: 'right' }}>
              <label>Login</label>
            </div>
            <Input
              placeholder="Enter your login"
              type="text"
              id="login-input"
              name="login"
              value={login}
              onChange={this.handleFormChange}
            />
            <div />
            { submitted && !login ? 'Login is required' : <div />}
            <div style={{ justifySelf: 'right' }}>
              <label>Password</label>
            </div>
            <Input
              placeholder="Enter your password"
              type="password"
              id="password-input"
              name="password"
              value={password}
              onChange={this.handleFormChange}
            />
            <div />
            { submitted && !password ? 'Password is required' : <div />}
          </Form>
          <ButtonsWrapper>
            <LoginButton
              disabled={!login || !password || isFetching}
              onClick={this.handleFormSubmit}
            >
              Login
            </LoginButton>
            <SignupButton href="https://app-staging.leadscore.io/#/signup">
              Sign up
            </SignupButton>
          </ButtonsWrapper>
        </FormWrapper>
      </LoginPageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.authData.isFetching,
  isError: state.authData.isError,
});
const mapDispatchToProps = dispatch => ({
  postLogin: params => dispatch(login(params)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
