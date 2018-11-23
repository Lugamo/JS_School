/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/mainContent.scss';
import BookTooltip from './Booktooltip';

function renderList(books) {
  let i = 0;
  return books.map((book) => {
    i += 1;
    return (
      <BookTooltip bookData={book} key={i} />
    );
  });
}
const List = ({ books, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mainBooks">
      {renderList(books)}
    </div>
  );
};

export default List;
