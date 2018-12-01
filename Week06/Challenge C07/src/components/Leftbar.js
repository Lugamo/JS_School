/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/lateralBars.scss';
import MenuOptions from './MenuOptions';

const LeftBar = ({ onFilterBooksApply }) => {
  return (
    <aside className="left-bar">
      <MenuOptions onFilterBooksApply={onFilterBooksApply} />
    </aside>
  );
};

export default LeftBar;
