import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.Searchbook = this.Searchbook.bind(this);
  }

  Searchbook(e) {
    const { onFilterBooksApply } = this.props;
    // When Key Enter is press and searchbar is not empty -> change the query
    if (e.key === 'Enter') {
      if (e.target.value) {
        e.preventDefault();
        onFilterBooksApply(`?q=${e.target.value}`, 'Found Books');
      } else {
        e.preventDefault();
      }
    }
  }

  render() {
    return (
      <div className="search-input">
        <form method="get" action="/search">
          <input name="search" type="text" size="40" placeholder="Search..." onKeyPress={this.Searchbook} />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  onFilterBooksApply: PropTypes.func.isRequired,
};

export default Search;
