import React from 'react';
import PropTypes from 'prop-types';
import '../styles/mainContent.scss';
import loadgif from '../../assets/images/loading.gif';
import Book from './Book';
import Tooltip from './tooltip';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const { books } = this.props;
    let i = 0;
    // for every book in JSON array, render the component
    return books.map((book) => {
      i += 1;
      return (
        <div className="Book tooltip" key={`BT${i}`}>
          <Book bookData={book} />
          <Tooltip bookData={book} />
        </div>
      );
    });
  }

  render() {
    const { loading, error, message } = this.props;
    // While fetch all the data, show a loading gif
    if (loading) {
      return (
        <div className="mainBooks">
          <img className="loading" src={loadgif} alt="Loading" />
        </div>
      );
    }
    // Show any error
    if (error) {
      return <div>{error}</div>;
    }
    // If the fetch is complete but response a empty array
    if (message !== 'OK') {
      return (
        <div className="mainBooks">
          <div className="notFound">{message}</div>
        </div>
      );
    }
    // Everything ok, show all books
    return (
      <div className="mainBooks">
        {this.renderList()}
      </div>
    );
  }
}

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default List;
