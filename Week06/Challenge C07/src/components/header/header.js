/* eslint-disable react/jsx-filename-extension */
import '../../styles/header.scss';
import logo from '../../../assets/images/jobsity.png';

const React = require('react');
// const ReactDOM = require('react-dom');

const Header = () => {
  return (
    <header>
      <div className="logo"><img src={logo} alt="jobsity-logo" /></div>
      <div className="text-tittle">Bookshelf</div>
    </header>
  );
};

export default Header;
