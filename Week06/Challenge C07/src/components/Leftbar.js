/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/lateralBars.scss';
import MenuOptions from './Menuoptions';

const LeftBar = ({ onfilterBooksApply }) => {
  return (
    <aside className="left-bar">
      <MenuOptions onfilterBooksApply={onfilterBooksApply} />
    </aside>
  );
};

export default LeftBar;
