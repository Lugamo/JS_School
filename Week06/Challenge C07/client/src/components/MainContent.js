/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/mainContent.scss';
import TopBarContent from './TopBarContent';
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
    <List books={books} loading={loading} message={message} error={error} />
  </main>
);

export default MainContent;
