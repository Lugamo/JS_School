import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { bindActionCreators } from 'redux';
import loadgif from '../../../assets/images/loading.gif';
import Book from './Book';
import Tooltip from './Tooltip';
import * as Style from './StyledMainContent';
import * as bookActions from '../../../redux/book/bookActions';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const { history } = this.props;
    const { books } = this.props.book;
    let i = 0;
    // for every book in JSON array, render the component
    return books.map((book) => {
      i += 1;
      return (
        <div className="Book tooltip" key={i}>
          <Book bookData={book} history={history} />
          <Tooltip bookData={book} />
        </div>
      );
    });
  }

  render() {
    const { loading, error, message, book } = this.props;
    const { books } = book;
    // While fetch all the data, show a loading gif
    if (loading) {
      return (
        <Style.MainBooks>
          <img className="loading" src={loadgif} alt="Loading" />
        </Style.MainBooks>
      );
    }
    // Show any error
    if (error) {
      return <div>{error}</div>;
    }
    // If the fetch is complete but response a empty array
    if (message !== 'OK') {
      return (
        <Style.MainBooks>
          <div className="notFound">{message}</div>
        </Style.MainBooks>
      );
    }

    // Listening if any book change
    const socket = socketIOClient('http://localhost:3001');
    console.log(this.props.book)
    socket.on('reservation_done', (response) => {
      const { updateLoanedBook } = this.props;
      updateLoanedBook(books, response[0])
    });

    // Everything ok, show all books
    return (
      <Style.MainBooks>
        {this.renderList()}
      </Style.MainBooks>
    );
  }
}

List.propTypes = {
  book: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
  books: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
  message: PropTypes.string,
};

// Get the specific data from the store
const mapStateToProps = state => ({
  book: state.book,
});

// get the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(bookActions, dispatch);
}

// Ask about how to do this without using mapStateToProps
// connect the container with data and actions
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
