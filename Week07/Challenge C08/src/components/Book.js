/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/mainContent.scss';
import lendMarkFront from '../../assets/images/lend-mark.png';
import lendMarkBack from '../../assets/images/lend-mark-back.png';
import Stars from './Stars';

const Book = ({ bookData, children }) => {
  const {
    quantity, borrowed, image, title, author, rating, city,
  } = bookData;
  return (
    <div>
      <div className="image-container">
        <img className="cover" src={image} alt={title} />
        <button type="button" className="btn-read">
          <i className="fas fa-book-open" />
        </button>
        {quantity
          && [
            (borrowed >= quantity
              && (
                <div>
                  <img src={lendMarkFront} className="lend-mark" alt="Book Mark" />
                  <img src={lendMarkBack} className="lend-mark-back" alt="Book Mark" />
                </div>
              )
            ),
          ]
        }
      </div>
      <p className="book-name">{title}</p>
      <p className="author-name">{author[0]}</p>
      {city
        ? (
          // If the book have a city
          <p className="author-name">{city}</p>
        ) : (
          // If the city of the book=null
          <p className="author-name">Digital</p>
        )}
      <p className="stars">
        {Stars(rating)}
      </p>
      {children}
    </div>
  );
};

export default Book;
