import React from 'react';
import PropTypes from 'prop-types';
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

TopBarContent.propTypes = {
  title: PropTypes.string.isRequired,
}
export default TopBarContent;
