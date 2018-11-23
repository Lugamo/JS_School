import React from 'react';
import '../styles/header.scss';

const Search = () => {
  return (
    <div className="search-input">
      <form method="get" action="/search">
        <input name="search" type="text" size="40" placeholder="Search..." />
      </form>
    </div>
  );
};

export default Search;
