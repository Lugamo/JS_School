import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import loadgif from '../assets/images/loading.gif';
import Book from './Book';
import Tooltip from './Tooltip';
import * as Style from './StyledMainContent';
import {ThemeProvider} from 'react-jss';
import theme from './Theme';

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
          <Tooltip bookData={book}/>
        </div>
      );
    });
  }

  render() {
    const { loading, error, message } = this.props;
    // While fetch all the data, show a loading gif
    if (loading) {
      return (
        <ThemeProvider theme={theme}>
          <Style.MainBooks>
            <img className="loading" src={loadgif} alt="Loading" />
          </Style.MainBooks>
        </ThemeProvider>
      );
    }
    // Show any error
    if (error) {
      return <div>{error}</div>;
    }
    // If the fetch is complete but response a empty array
    if (message !== 'OK') {
      return (
        <ThemeProvider theme={theme}>
          <Style.MainBooks>
            <div className="notFound">{message}</div>
          </Style.MainBooks>
        </ThemeProvider>
      );
    }
    // Everything ok, show all books
    return (
      <ThemeProvider theme={theme}>
        <Style.MainBooks>
          {this.renderList()}
        </Style.MainBooks>
      </ThemeProvider>
    );
  }
}

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
  message: PropTypes.string,
};

// Get the specific data from the store
const mapStateToProps = state => {
  return {
    book: state.book,
  };
};

// Ask about how to do this without using mapStateToProps
// connect the container with data and actions
export default withRouter(connect(mapStateToProps)(List));
