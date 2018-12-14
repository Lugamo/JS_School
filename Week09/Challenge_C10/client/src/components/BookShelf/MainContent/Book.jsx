import React from 'react';
import PropTypes from 'prop-types';
import lendMarkFront from '../../../assets/images/lend-mark.png';
import lendMarkBack from '../../../assets/images/lend-mark-back.png';
import Stars from './Stars';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.goBook = this.goBook.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  goBook(bookID) {
    const { history } = this.props;
    history.push(`/books/detail/${bookID}`);
  }

  render() {
    const { bookData } = this.props;
    const {
      quantity, borrowed, image, title, author, rating, city, id,
    } = bookData;
    return (
      <div>
        <div className="image-container">
          <img className="cover" src={image} alt={title} />
          <button type="button" className="btn-read" onClick={() => this.goBook(id)}>
            <i className="fas fa-book-open" />
          </button>
          {quantity
            && [
              (borrowed >= quantity
                && (
                  <div key={`${id}-lendImage`}>
                    <img src={lendMarkFront} className="lend-mark" alt="Book Mark" />
                    <p className="lend-mark-text">OUT</p>
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
          {Stars(rating, id, 'B')}
        </p>
      </div>
    );
  }
}

Book.propTypes = {
  bookData: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any),
};

export default Book;
