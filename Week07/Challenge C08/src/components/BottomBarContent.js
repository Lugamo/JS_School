/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/mainContent.scss';

const BottomBarContent = () =>  {
  return (
    <div className="main-bottom">
      <div className="pagination">
        <a>&laquo; Prev</a>
        <NavLink to="/books/all?page=2">1</NavLink>
        <a className="active">2</a>
        <a>3</a>
        <a>Next &raquo;</a>
      </div>
    </div>
  );
};

export default BottomBarContent;
