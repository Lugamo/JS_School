import React from 'react';
import {ThemeProvider} from 'react-jss';

import MenuOptions from './MenuOptions';
import * as Style from './StyledSideBars';
import theme from '../Theme';

const LeftBar = () => (
  <ThemeProvider theme={theme}>
    <Style.LeftBar>
    <MenuOptions />
    </Style.LeftBar>
  </ThemeProvider>
);

export default LeftBar;
