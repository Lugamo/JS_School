/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/mainContent.scss';

const TopBarContent = ({ title }) => {
  return (
    <div className="main-top">
      <div type="text" className="content-tittle">{title}</div>
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
