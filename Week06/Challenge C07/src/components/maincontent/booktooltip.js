import '../../styles/mainContent.scss';
import Book from './book';
import Tooltip from './tooltip';

const React = require('react');


const BookTooltip = (value) => {
  return (
    <div className="Book tooltip">
      <Book {...value} />
      <Tooltip {...value} />
    </div>
  );
};

export default BookTooltip;
