import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from '../_actions/authActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      submitted: false
    };
  }

  handleFormChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    const { login, password } = this.state;
    const { postLogin } = this.props;

    if (login && password) {
      postLogin({login, password});
    }
  };

  render() {
    const { login, password, submitted } = this.state;

    return (
      <div className="container">
        <h2>Login</h2>
        <form name="login-form" onSubmit={this.handleFormSubmit}>
          <div className={(submitted && !login ? 'val-error' : '')}>
            <label htmlFor="login-input">Login</label>
            <input
              type="text"
              id="login-input"
              name="login"
              value={login}
              onChange={this.handleFormChange}
            />
            {submitted &&
              !login && (
                <div className="form-helper-text">Login is required</div>
              )}
          </div>
          <div className={(submitted && !password ? 'val-error' : '')}>
            <label htmlFor="password-input">Password</label>
            <input
              type="password"
              id="password-input"
              name="password"
              value={password}
              onChange={this.handleFormChange}
            />
            {submitted &&
              !password && (
                <div className="form-helper-text">Password is required</div>
              )}
          </div>
          <div>
            <button type="submit" className="btn login-btn">Login</button>
            <Link to="https://app-staging.leadscore.io/#/signup" className="btn sign-up-btn">Sign up</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  postLogin: params => dispatch(login(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
