import React from 'react';
import {ThemeProvider} from 'react-jss';

import * as Style from './StyledSideBars';
import theme from '../Theme';

const RightBar = () => (
  <ThemeProvider theme={theme}>
    <Style.RightBar>
    <Style.RightBarTitle>MOST READ BOOKS</Style.RightBarTitle>
    <ol>
      <li>Hooked: How to Build Habit-Forming Products</li>
      <li>the inevitable understanding the 12 technological forces that will shape our future</li>
      <li>Lean In: Women, Work, and the Will to Lead</li>
      <li>Building a Business When There Are No Easy Answers</li>
      <li>How Google Works</li>
    </ol>
    </Style.RightBar>
  </ThemeProvider>
);

export default RightBar;
