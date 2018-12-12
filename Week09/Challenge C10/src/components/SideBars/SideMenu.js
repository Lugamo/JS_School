/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';

import MenuOptions from './MenuOptions';
import * as Style from './StyledSideMenu';
import theme from '../Theme';

const SideMenu = ({ visible, closeMenu }) => (
  <ThemeProvider theme={theme}>
    <Style.SideMenu style={{ width: visible ? 250 : 0 }}>
      <Style.BtnClose onClick={closeMenu}>
        Back
      </Style.BtnClose>
      <MenuOptions closeMenu={closeMenu} />
    </Style.SideMenu>
  </ThemeProvider>
);

SideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default SideMenu;
