import React from 'react';
// import '../styles/style.scss';
import { NavLink } from 'react-router-dom';

const Notfound = () => (
  <div className="pageNotFound">
    <h1>404</h1>
    <p>
     Sorry but the page you are looking for does not exist,
      have been removed. name changed or is temporarily unavailable
    </p>
    <NavLink to="/">Back to Home Page</NavLink>
  </div>
);

export default Notfound;
