import React from 'react';
import '../styles/lateralBars.scss';

const RightBar = () => {
  return (
    <aside className="right-bar">
      <div type="text" className="rb-tittle">MOST READ BOOKS</div>
      <ol>
        <li>Hooked: How to Build Habit-Forming Products</li>
        <li>the inevitable understanding the 12 technological forces that will shape our future</li>
        <li>Lean In: Women, Work, and the Will to Lead</li>
        <li>Building a Business When There Are No Easy Answers</li>
        <li>How Google Works</li>
      </ol>
    </aside>
  );
};

export default RightBar;
