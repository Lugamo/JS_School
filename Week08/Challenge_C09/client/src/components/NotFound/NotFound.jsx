import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Style from './StyledNotFound';

const Notfound = () => (
  <Style.NotFound>
    <h1>404</h1>
    <p>
    Sorry but the page you are looking for does not exist,
      have been removed. name changed or is temporarily unavailable
    </p>
    <NavLink to="/">Back to Home Page</NavLink>
  </Style.NotFound>
);

export default Notfound;
