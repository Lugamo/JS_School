/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/mainContent.scss';
import loadgif from '../../assets/images/loading.gif';
import BookTooltip from './Booktooltip';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const { books } = this.props;
    let i = 0;
    return books.map((book) => {
      i += 1;
      return (
        <BookTooltip bookData={book} key={i} />
      );
    });
  }

  render() {
    const { loading, error, message } = this.props;
    if (loading) {
      return (
        <div className="mainBooks">
          <img className="loading" src={loadgif} alt="Loading" />
        </div>
      );
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (message !== 'OK') {
      return (
        <div className="mainBooks">
          <div className="notFound">{message}</div>
        </div>
      );
    }
    return (
      <div className="mainBooks">
        {this.renderList()}
      </div>
    );
  }
}

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default List;
