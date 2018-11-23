/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../styles/header.scss';
import MenuOptions from './Menuoptions';

const SideMenu = ({ visible, closeMenu, filterBooks }) => {
  return (
    <div style={{ width: visible ? 250 : 0 }} className="side-nav">
      <div className="btn-close" onClick={closeMenu}>
        <i className="fas fa-chevron-left" />
        Back
      </div>
      <MenuOptions filterBooks={filterBooks} />
    </div>
  );
};

export default SideMenu;
