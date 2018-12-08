import React from 'react';
// import '../styles/lateralBars.scss';
import MenuOptions from './MenuOptions';
import * as Style from './StyledSideBars';
import {ThemeProvider} from 'react-jss';
import theme from './Theme';

const LeftBar = () => (
  <ThemeProvider theme={theme}>
    <Style.LeftBar>
    <MenuOptions />
    </Style.LeftBar>
  </ThemeProvider>
);

export default LeftBar;
