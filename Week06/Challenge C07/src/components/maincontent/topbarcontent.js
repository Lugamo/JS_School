/* eslint-disable react/jsx-filename-extension */
import '../../styles/mainContent.scss';

const React = require('react');
// const ReactDOM = require('react-dom');

const TopBarContent = () => {
  return (
    <div className="main-top">
      <div type="text" className="content-tittle">New Releases</div>
      <div className="order-section">
        <span>Release date</span>
        <span>&ensp;|&ensp;</span>
        <span>Popularity</span>
      </div>
      <div className="display-opt">
        <i className="fa fa-list-ul display-btn" />
        <i className="fa fa-th-large display-btn" />
      </div>
    </div>
  );
};

export default TopBarContent;
