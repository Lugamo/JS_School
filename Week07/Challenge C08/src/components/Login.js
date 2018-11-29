import React from 'react';
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <form className="login">
    <h1 className="login-title">Bookshelf Login</h1>
    <input type="text" className="login-input" placeholder="Email Adress" />
    <input type="password" className="login-input" placeholder="Password" />
    <input type="submit" value="Lets Go" className="login-button" />
    <p className="login-lost">
      Not an user?
      <NavLink to="/">
        Register now
      </NavLink>
    </p>
  </form>
);

export default Login;
