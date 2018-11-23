/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/lateralBars.scss';
import MenuOptions from './Menuoptions';

const LeftBar = ({ filterBooks }) => {
  return (
    <aside className="left-bar">
      <MenuOptions filterBooks={filterBooks} />
    </aside>
  );
};

export default LeftBar;
