/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/mainContent.scss';
import Book from './Book';
import Tooltip from './tooltip';

const BookTooltip = ({ bookData }) => {
  return (
    <div className="Book tooltip">
      <Book bookData={bookData} />
      <Tooltip bookData={bookData} />
    </div>
  );
};

export default BookTooltip;
