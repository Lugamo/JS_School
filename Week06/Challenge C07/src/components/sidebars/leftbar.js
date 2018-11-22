/* eslint-disable react/jsx-filename-extension */
import '../../styles/lateralBars.scss';
import MenuOptions from './menuoptions';

const React = require('react');
// const ReactDOM = require('react-dom');

const LeftBar = () => {
  return (
    <aside className="left-bar">
      <MenuOptions />
    </aside>
  );
};

export default LeftBar;
