/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/mainContent.scss';
import TopBarContent from './Topbarcontent';
import BottomBarContent from './BottomBarContent';
import List from './ListBook';

const MainContent = ({
  books,
  loading,
  title,
  message,
  error,
}) => (
  <main className="main-content">
    <TopBarContent title={title} />
    <List
      books={books}
      loading={loading}
      message={message}
      error={error}
    />
    <BottomBarContent />
  </main>
);

export default MainContent;