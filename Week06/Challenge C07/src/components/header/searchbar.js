import '../../styles/header.scss';

const React = require('react');
// const ReactDOM = require('react-dom');

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
