/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';
import MenuOptions from './MenuOptions';

const SideMenu = ({ visible, closeMenu }) => (
  <div style={{ width: visible ? 250 : 0 }} className="side-nav">
    <div className="btn-close" onClick={closeMenu}>
      <i className="fas fa-chevron-left" />
      Back
    </div>
    <MenuOptions closeMenu={closeMenu} />
  </div>
);

SideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default SideMenu;
