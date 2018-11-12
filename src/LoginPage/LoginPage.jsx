import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { login } from '../_actions/authActions';
import FullPageSpinner from '../_common/FullPageSpinner';
import LoginFormButtons from './LoginFormButtons';
import ValidationError from './ValidationError';
import Form from './Form';

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
          <ValidationError isError={isError} />
          <Form handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} login={login} password={password} submitted={submitted} />
          <LoginFormButtons login={login} password={password} isFetching={isFetching} handleFormSubmit={this.handleFormSubmit} />
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
