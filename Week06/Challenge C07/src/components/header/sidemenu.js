/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../../styles/header.scss';
import MenuOptions from '../sidebars/menuoptions';

const React = require('react');
// const ReactDOM = require('react-dom');

const SideMenu = ({ visible, closeMenu }) => {
  return (
    <div style={{ width: visible ? 250 : 0 }} className="side-nav">
      <div className="btn-close" onClick={closeMenu}>
        <i className="fas fa-chevron-left" />
        Back
      </div>
      <MenuOptions />
    </div>
  );
};

export default SideMenu;
