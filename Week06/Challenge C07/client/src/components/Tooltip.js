import React from 'react';
import PropTypes from 'prop-types';
import '../styles/mainContent.scss';
import Stars from './Stars';

const Tooltip = ({ bookData }) => {
  const {
    digital, title, author, rating, year, pages, summary,
  } = bookData;
  return (
    <div className="tooltiptext">
      <h1>{title}</h1>
      <span className="year">{year}</span>
      <p>
        Novel by
        <span className="author">{author}</span>
      </p>
      <p>
        {pages}
        pages
      </p>
      <h2>Summary</h2>
      <p className="summary">{summary}</p>
      <h2>Rating</h2>
      <p className="stars">
        {Stars(rating)}
      </p>
      {!digital === true
        ? (
          <button type="button" className="btn-dont-lend">Dont Lend</button>
        ) : (
          <button type="button" className="btn-lend">Lend</button>
        )
          }
    </div>
  );
};

Tooltip.propTypes = {
  bookData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Tooltip;
