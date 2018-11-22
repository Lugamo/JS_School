/* eslint-disable react/prop-types */
import '../../styles/mainContent.scss';
import lendMarkFront from '../../../assets/images/lend-mark.png';
import lendMarkBack from '../../../assets/images/lend-mark-back.png';
import Stars from './stars';

const React = require('react');


const Book = (value) => {
  const {
    digital, image, title, author, rating, city,
  } = value.props;
  return (
    <div>
      <div className="image-container">
        <img className="cover" src={image} alt={title} />
        <button type="button" className="btn-read">
          <i className="fas fa-book-open" />
        </button>
        {!digital === true
          && (
          <div>
            <img src={lendMarkFront} className="lend-mark" alt="Book Mark" />
            <img src={lendMarkBack} className="lend-mark-back" alt="Book Mark" />
          </div>
          )
        }
      </div>
      <p className="book-name">{title}</p>
      <p className="author-name">{author[0]}</p>
      {city
        ? (
          <p className="author-name">{city}</p>
        ) : (
          <p className="author-name">Digital</p>
        )}
      <p className="stars">
        {Stars(rating)}
      </p>
    </div>
  );
};

export default Book;
