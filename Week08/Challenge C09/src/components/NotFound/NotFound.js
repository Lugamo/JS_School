import React from 'react';
import { NavLink } from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import * as Style from './StyledNotFound';
import theme from '../Theme';

const Notfound = () => (
  <ThemeProvider theme={theme}>
    <Style.NotFound>
      <h1>404</h1>
      <p>
      Sorry but the page you are looking for does not exist,
        have been removed. name changed or is temporarily unavailable
      </p>
      <NavLink to="/">Back to Home Page</NavLink>
    </Style.NotFound>
  </ThemeProvider>
);

export default Notfound;