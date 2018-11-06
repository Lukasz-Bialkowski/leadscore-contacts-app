import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });

    const { login, password } = this.state;
    const { dispatch } = this.props;

    if (login && password) {
      dispatch({ type: 'Login', payload: { user: { login, password } } });
    }
  }

  render() {
    const { login, password, submitted } = this.state;

    return (
      <div className="container">
        <h2>Login</h2>
        <form name="login-form" onSubmit={this.handleFormSubmit}>
          <div className={(submitted && !login ? 'val-error' : '')}>
            <label htmlFor="login-input">Login</label>
            <input type="text" id="login-input" name="login-input" value={login} onChange={this.handleChange} />
            {submitted && !login && <div className="form-helper-text">Login is required</div>}
          </div>
          <div className={(submitted && !password ? 'val-error' : '')}>
            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" name="password-input" value={password} onChange={this.handleChange} />
            {submitted && !password && <div className="form-helper-text">Password is required</div>}
          </div>
          <div>
            <button type="submit" className="btn login-btn">Login</button>
            <Link to="/sign-up" className="btn sign-up-btn">Sign up</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
