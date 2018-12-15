/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import MenuOptions from './MenuOptions';
import * as Style from './StyledSideMenu';

const SideMenu = ({ visible, closeMenu }) => (
  <Style.SideMenu style={{ width: visible ? 250 : 0 }}>
    <Style.BtnClose onClick={closeMenu}>
      Back
    </Style.BtnClose>
    <MenuOptions closeMenu={closeMenu} />
  </Style.SideMenu>
);

SideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default SideMenu;
