/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';
import { withIndexContext } from './IndexContext';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: true,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLog = this.handleLog.bind(this);
  }

  handleEmail(text) {
    this.setState({
      email: text.target.value,
    });
  }

  handlePassword(text) {
    this.setState({
      password: text.target.value,
    });
  }

  handleLog() {
    const { updateUser } = this.props;
    const url = 'http://localhost:3000/token';
    const { email, password } = this.state;
    const data = `email=${email}&password=${password}`;

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: data, // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        if (response.token) {
          updateUser(response.token);
        } else {
          this.setState({
            credentials: false,
          });
        }
      });
  }

  render() {
    const { credentials } = this.state;
    return (
      <form className="login">
        <h1 className="login-title">Bookshelf Login</h1>
        <input
          type="text"
          className="login-input"
          placeholder="Email Adress"
          onChange={text => this.handleEmail(text)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          onChange={text => this.handlePassword(text)}
        />
        <button type="button" className="login-button" onClick={() => this.handleLog()}>Log In</button>
        <p className="login-lost">
          Not an user?
          {' '}
          <NavLink to="/">
            Register now
          </NavLink>
        </p>
        {!credentials
          && (
            <div className="credentials">
              <p>The email or password is incorrect, please enter valid credentials</p>
            </div>
          )
        }
      </form>

    );
  }
}

export default withIndexContext(Login);
